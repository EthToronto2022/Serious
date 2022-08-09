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

    
    struct CommitedCompany{
        string name;
        bool rated;
        bool codeVerified;
    }
    

    struct Message{
        string link; 
        string hashedCode;
        Company company;
        bool codeVerified;
        bool rated;
    }

    modifier onlyAdmin{
        require(isAdmin[msg.sender]);
    }
    
    mapping(address => bool) isAdmin;
    mapping(address => unit256) escrow;
    mapping(address => Message[]) userToMessages;
    mapping(address => Company[]) userToCompanies;
    mapping(string =>  Company[]) keywords;
    mapping(string =>  Company) nameToCompany;
    mapping(address => uint256) userScore;
    mapping(string => Message) linkToMessage;
    mapping(string => bool) companyRemoved;
    //for every keyword, any given user can be in escrow for some companies
    //mapping(keyword => mapping(user => Company[]))
    mapping(string => mapping(address => commitedCompany[])) commitment;


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

    function getCommitmentsByKeyword(string _keyword) internal returns (CommitedCompanies[] memory) {
        CommittedCompanies[] memory companies = commitments[_keyword][msg.sender];
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

        CommittedCompanies[] memory companies = getCommitmentsByKeyword(company.keyword);

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
        userToMessages[_client].push(message);
        linkToMessage[_link] = message;
    }

    function verifyCode(string memory _word, string memory _link) public {
        Message memory message = linkToMessage[_link];
        require(keccak256(_word) == message.hashedCode, "wrong code");
        
    }

    function checkVerification(string _keyword) {
        //we want to make sure their code matches and they rated all their companies

        
    }

    //function withdrawFromEscrow(){}
}