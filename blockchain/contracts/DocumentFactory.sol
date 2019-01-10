pragma solidity ^0.5.0;

contract DocumentFactory {
    struct Document{
        address hash;
        string name;
        string url;
    }

    event DocumentCreated(uint docId, address documentHash,string name,string url);

    Document[] documents;
    mapping (uint => address) documentToPublisher;
    mapping (address => uint) ownerDocumentCount;
    mapping (uint => address) documentToReceiver;

    function createDocument(address _documentHash,string memory _name,string memory _url) public{
        uint docId = documents.push(Document(_documentHash,_name,_url)) - 1;
        documentToPublisher[docId] = msg.sender;
        ownerDocumentCount[msg.sender] += 1;

        emit DocumentCreated(docId,_documentHash,_name,_url);
    }
}
