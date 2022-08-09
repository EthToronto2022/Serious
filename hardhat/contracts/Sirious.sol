//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Sirious {

    struct Company{
        address admin;
        int256 priceRating;
        int256 accuracyRating;
        int256 serviceRating;
        string keyword;
        string name; 
        string description; 
        string url; 
        string image;
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
    mapping(address => Message[]) userToMessages;
    mapping(address => Company[]) userToCompanies;
    mapping(string =>  Company[]) keywords;
    mapping(string =>  Company) nameToCompany;
    mapping(address => uint256) userScore;
    mapping(string => Message) linkToMessage;
    mapping(string => bool) codeMatched;

    function addAdmin(address _admin) public onlyAdmin{
        isAdmin[_admin] = true;
    }

    //remove admin needs to be multisig; dont need to add now

    //user clicks collect score button??
    function increaseUserScore(uint256 _scoreIncrement) public {
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
    
    function rateAccuracy(string memory _name, int256 _rating) public {
        Company memory company = getCompany(_name);
        require( (company.accuracyRating += _rating) >= 0, "rating 0");
        company.accuracyRating += _rating;
    }

    function ratePrice(string memory _name, int256 _rating) public {
        Company memory company = getCompany(_name);
        require( (company.priceRating += _rating) >= 0, "rating 0");
        company.priceRating += _rating;
    }

    function rateService(string memory _name, int256 _rating) public {
        Company memory company = getCompany(_name);
        require( (company.serviceRating += _rating) >= 0, "rating 0");
        company.serviceRating += _rating;
    }

    function addCompany(
        address _admin,
        string memory _name, 
        string memory _description, 
        string memory _keyword,
        string memory _url, 
        string memory _image) public payable {
        
        //require(msg.value ==); **DETERMINE PRICE
        Company company = new Company(_admin, 0, 0, 0, _name, _description, _url, _image);
        companies.push(company);
        //record payment timestamp??
        nameToCompany[_name] = company;
        keywords[_keyword].push(company);
        }
    }

    function removeCompany(string _name) public {
        Company memory company = getCompany(_name);
        require(msg.sender == company.admin, "caller not admin");
        delete companies[company];
        delete nameToCompany[company.name];

        //bad arr init
        Company companies[] = keywords[company.keyword];

        for (uint256 i; i <= companies.length; i++) {
            if( companies[i] == company) {
                delete keywords[company.keyword][comp];
                break;
            }
        }
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
        codeMatched[_link] = true;
    }
}