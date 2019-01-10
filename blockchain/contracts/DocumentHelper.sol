pragma solidity ^0.5.0;

import "./DocumentTransfer.sol";

contract DocumentHelper is DocumentTransfer {
    function getDocumentsReceived(address _owner) public view returns(uint[] memory) {
        uint[] memory result = new uint[](ownerDocumentCount[_owner]);
        uint counter = 0;
        for(uint i=0;i<documents.length;i++){
            if(documentToReceiver[i] == _owner){
                result[counter] = i;
                counter++;
            }
        }

        return result;
    }

    function getDocumentsPublished(address _owner) public view returns(uint[] memory){
        uint[] memory result = new uint[](ownerDocumentCount[_owner]);
        uint counter = 0;
        for(uint i=0;i<documents.length;i++){
            if(documentToPublisher[i] == _owner){
                result[counter] = i;
                counter++;
            }
        }

        return result;
    }

    function getDocumentsUnpublished(address _owner) public view returns(uint[] memory){
        uint[] memory result = new uint[](ownerDocumentCount[_owner]);
        uint counter = 0;
        for(uint i = 0; i<documents.length;i++){
            if(documentToPublisher[i]==_owner && documentToReceiver[i]==address(0) ){
                result[counter] = i;
                counter++;
            }
        }

        return result;
    }

    function getDocument(uint _id) public view returns(address,string memory,string memory  ){
        Document memory doc = documents[_id];
        return (doc.hash,doc.name,doc.url);
    }

    function getDocumentByHash(address _documentHash) public view returns(address _hash,string memory _name,string memory _url,address _publisher,address _receiver){
        for(uint i=0; i<documents.length;i++){
            if(documents[i].hash==_documentHash){
                Document memory doc = documents[i];
                address publisher = documentToPublisher[i];
                address receiver = documentToReceiver[i];
                return (doc.hash,doc.name,doc.url,publisher,receiver);
            }
        }

        address emptyAddress = address(0);
        return (emptyAddress,"","",emptyAddress,emptyAddress);
    }
}
