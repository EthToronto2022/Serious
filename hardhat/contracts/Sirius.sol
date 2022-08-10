//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Sirius {
  struct Company {
    address companyAdmin;
    int256 priceRating;
    int256 accuracyRating;
    int256 serviceRating;
    string keyword;
    string name;
    string description;
    string url;
    string image;
  }

  struct Pledge {
    string name;
    bool rated;
    bool codeVerified;
  }

  struct Message {
    string name;
    string link;
    string hashedCode;
  }

  modifier onlyAdmin() {
    require(isAdmin[msg.sender], "Not admin");
    _;
  }

  uint256 private creationFee = 0.01 ether;

  mapping(address => bool) isAdmin;

  //user => (keyword => escrow amt)
  mapping(address => mapping(string => uint256)) public escrow;
  mapping(string => Company[]) public keywords;
  mapping(string => Company) public nameToCompany;
  mapping(address => uint256) public userScore;
  mapping(string => Message) public linkToMessage;
  mapping(string => bool) public companyRemoved;
  mapping(address => string[]) public activeKeywords;

  //company name to 'raised hand' users
  mapping(string => address[]) public interestedUsers ;

  //by user
  mapping(address => mapping(string => Message[])) public userToMessages;
  //by keyword
  mapping(string => mapping(address => Pledge[])) public pledges;

  function addAdmin(address _admin) public onlyAdmin {
    isAdmin[_admin] = true;
  }

  //user clicks collect score button??
  function increaseUserScore(uint256 _scoreIncrement) internal {
    userScore[msg.sender] += _scoreIncrement;
  }

  //could be based on timestamp
  function decreaseUserScore(address _user, uint256 _scoreDecrement)
    public
    onlyAdmin
  {
    userScore[_user] -= _scoreDecrement;
  }

  function getCompany(string memory _name)
    internal
    view
    returns (Company memory)
  {
    Company memory company = nameToCompany[_name];
    return company;
  }

  function getPledgesByKeyword(string memory _keyword)
    internal
    view
    returns (Pledge[] memory)
  {
    Pledge[] memory companies = pledges[_keyword][msg.sender];
    return companies;
  }

  function rateCompany(
    string memory _name,
    int256 _accuracy,
    int256 _price,
    int256 _service
  ) public {
    Company memory company = getCompany(_name);

    if ((company.accuracyRating += _accuracy) >= 0) {
      company.accuracyRating += _accuracy;
    }

    if ((company.priceRating += _price) >= 0) {
      company.priceRating += _price;
    }

    if ((company.serviceRating += _service) >= 0) {
      company.serviceRating += _service;
    }

    Pledge[] storage companies = pledges[company.keyword][msg.sender];

    for (uint256 i; i <= companies.length; i++) {
      if (
        keccak256(abi.encodePacked(companies[i].name)) ==
        keccak256(abi.encodePacked(_name))
      ) {
        companies[i].rated = true;
        break;
      }
    }
  }

  function addCompany(
    string memory _name,
    string memory _description,
    string memory _keyword,
    string memory _url,
    string memory _image
  ) public payable {
    //**PAYMENT SCHEME TBD
    //require(msg.value ==);
    Company memory company = Company(
      msg.sender,
      0,
      0,
      0,
      _keyword,
      _name,
      _description,
      _url,
      _image
    );
    //record payment timestamp?? <-----

    nameToCompany[_name] = company;
    keywords[_keyword].push(company);

    companyRemoved[_name] = false;
  }

  function removeCompany(string memory _name) public {
    Company memory company = getCompany(_name);
    require(
      (msg.sender == company.companyAdmin || isAdmin[msg.sender]),
      "admins only"
    );

    delete nameToCompany[company.name];

    Company[] memory companies = keywords[company.keyword];

    for (uint256 i; i <= companies.length; i++) {
      if (
        keccak256(abi.encodePacked(companies[i].name)) ==
        keccak256(abi.encodePacked(company.name))
      ) {
        delete keywords[company.keyword];
        break;
      }
    }
    companyRemoved[_name] = true;
    return;
  }

  function setMessage(
    address _client,
    string memory _link,
    string memory _hashedCode,
    string memory _name,
    string memory _keyword
  ) public {
    Message memory message = Message(_name, _link, _hashedCode);
    userToMessages[_client][_keyword].push(message);
    linkToMessage[_link] = message;
  }

  function setPledges(Company[] memory _companies) public {
    activeKeywords[msg.sender].push(_companies[0].keyword);
    for (uint256 i; i <= _companies.length; i++) {
      Pledge memory pledge = Pledge(_companies[i].name, false, false);
      pledges[_companies[i].keyword][msg.sender].push(pledge);
    }
  }

  function setKeyword(string memory _keyword) public payable {
    require(msg.value == creationFee, "Invalid fee");
    activeKeywords[msg.sender].push(_keyword);
    escrow[msg.sender][_keyword] = msg.value;
  }

  //companies need to know WHO to contact (company name to pledges or user addrs)

  function getInterestedUsers(string memory _name)
    public
    view
    returns (address[] memory)
  {
    address[] memory users = interestedUsers[_name];
    return users;
  }

  function verifyCode(string memory _word, string memory _link) public view {
    Message memory message = linkToMessage[_link];
    require(
      keccak256(abi.encodePacked(_word)) ==
        keccak256(abi.encodePacked(message.hashedCode)),
      "wrong code"
    );

    //get from message to pledge and set pledge to verified
    Company memory company = nameToCompany[message.name];
    //mapping(string => mapping(address => Pledge[])) pledges;

    Pledge[] memory pledgesArr = pledges[company.keyword][msg.sender];

    for (uint256 i; i <= pledgesArr.length; i++) {
      if (
        keccak256(abi.encodePacked(pledgesArr[i].name)) ==
        keccak256(abi.encodePacked(message.name))
      ) {
        pledgesArr[i].codeVerified = true;
        return;
      }
    }
  }

  function checkVerification(string memory _keyword)
    internal
    view
    returns (bool)
  {
    Pledge[] memory pledgesArr = getPledgesByKeyword(_keyword);

    for (uint256 i; i <= pledgesArr.length; i++) {
      if (pledgesArr[i].rated == false || pledgesArr[i].codeVerified == false) {
        return false;
      }
    }
    return true;
  }

  function withdrawFromEscrow(string memory _keyword) public {
    Pledge[] memory pledgesArr = getPledgesByKeyword(_keyword);
    require(pledgesArr.length != 0, "no pledges");
    require(checkVerification(_keyword), "not complete");

    uint256 owed = escrow[msg.sender][_keyword];
    //re-entrancy attack guard
    delete escrow[msg.sender][_keyword];

    payable(msg.sender).transfer(owed);

    Message[] memory messages = userToMessages[msg.sender][_keyword];

    for (uint256 i; i <= messages.length; i++) {
      Message memory message = messages[i];
      delete linkToMessage[message.link];
    }
    delete userToMessages[msg.sender][_keyword];
    delete pledges[_keyword][msg.sender];
  }
}
