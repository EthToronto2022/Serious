//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Sirious {

    struct Company{
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

    struct Pledge{
        string name;
        bool rated;
        bool codeVerified;
    }
    
    struct Message{
        string link; 
        string hashedCode;
        Company company;
    }

    modifier onlyAdmin{
        require(isAdmin[msg.sender]);
    }
    
    mapping(address => bool) isAdmin;
    //user => (keyword => escrow amt)
    mapping(address => mapping(string => unit256)) escrow;
    //mapping(address => Message[]) userToMessages;
    //mapping(address => Company[]) userToCompanies;
    mapping(string =>  Company[]) keywords;
    mapping(string =>  Company) nameToCompany;
    mapping(address => uint256) userScore;
    mapping(string => Message) linkToMessage;
    mapping(string => bool) companyRemoved;
    mapping(Pledge => Message) pledgeToMessage;
    //for every keyword, any given user can be in escrow for some companies
    //mapping(keyword => mapping(user => Company[]))
    mapping(string => mapping(address => Pledge[])) pledges;


    function addAdmin(address _admin) public onlyAdmin{
        isAdmin[_admin] = true;
    }

    //remove admin needs to be multisig; dont need to add now

    //user clicks collect score button??
    function increaseUserScore(uint256 _scoreIncrement) internal {
        userScore[msg.sender] += _scoreIncrement;
    }

    //could be based on timestamp
    function decreaseUserScore(address _user, uint256 _scoreDecrement) public onlyAdmin {
        userScore[_user] -= _scoreDecrement;
    }

    function getCompany(string memory _name) internal returns (Company memory) {
        Company memory company = nameToCompany[_name];
        return company;
    }

    function getPledgesByKeyword(string _keyword) internal returns (Pledge[] memory) {
        Pledge[] memory companies = pledges[_keyword][msg.sender];
        return companies;
    }
    
    function rateCompany(string memory _name, int256 _accuracy, int256 _price, int256 _service) {
        
        Company memory company = getCompany(_name);
    
        if (company.accuracyRating += _rating >= 0) {
            company.accuracyRating += _rating;
        }
        
        if(company.priceRating += _rating >= 0) {
            company.priceRating += _rating;
        }

        if (company.serviceRating += _rating >= 0) {
            company.serviceRating += _rating;
        }

        Pledge[] memory companies = getPledgesByKeyword(company.keyword);

        for (uint256 i; i <= companies.length; i++){
            if(companies[i].name == _name){
                companies[i].rated = true;
                break;
            }
        }
    }

    function addCompany(
        address _companyAdmin,
        string memory _name, 
        string memory _description, 
        string memory _keyword,
        string memory _url, 
        string memory _image) public payable {
        
        //**PAYMENT SCHEME TBD
        //require(msg.value ==); 
        Company company = new Company(_companyAdmin, 0, 0, 0, _name, _description, _url, _image);
        companies.push(company);
        //record payment timestamp??
        nameToCompany[_name] = company;
        keywords[_keyword].push(company);
        }

        companyRemoved[_name] = false;
    }

    function removeCompany(string _name) public {
        Company memory company = getCompany(_name);
        require((msg.sender == company.admin || isAdmin[msg.sender]), "admins only");
        delete companies[company];
        delete nameToCompany[company.name];

        Company[] companies = keywords[company.keyword];

        for (uint256 i; i <= companies.length; i++) {
            if( companies[i] == company) {
                delete keywords[company.keyword][comp];
                break;
            }
        }
        companyRemoved[_name] = true;
        return;  
    }

    function setMessage(address _client, string memory _link, string memory _hashedCode, string memory _name) public {
        Company memory company = getCompany(_name);
        Message message = new Message(_link, _hashedCode, company);
        linkToMessage[_link] = message;
    }

    function verifyCode(string memory _word, string memory _link) public {
        Message memory message = linkToMessage[_link];
        require(keccak256(_word) == message.hashedCode, "wrong code");
        
    }

    function checkVerification(string _keyword) internal returns (bool) {
        //we want to make sure their code matches and they rated all their companies

        Pledges[] memory pledges = getPledgesByKeyword(_keyword);

        for (uint256 i; i <= pledges.length; i++) {
            if(pledges[i].rated == false || pledges[i].codeVerified == false) {
                return false;
            }
            return true;
        }
    }

    function withdrawFromEscrow(string _keyword) public {
        Pledges[] pledges = getPledgesByKeyword(_keyword);
        require(pledges.length != 0, "no pledges");
        require(checkVerification(_keyword), "not complete");

        uint256 owed = escrow[msg.sender];
        //re-entrancy attack guard
        escrow[msg.sender] = 0;
        msg.sender.transfer(owed);

        for (uint256 i; i <= pledges.length; i++) {

            Message memory message = pledgeToMessage[i];
            delet linkToMessage[message.link];
            delete pledgeToMessage[pledges[i]];
        }
        delete pledges[_keyword][msg.sender];
        delete pledges[_keyword];
    }









}