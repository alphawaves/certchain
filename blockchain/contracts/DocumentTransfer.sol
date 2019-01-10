pragma solidity ^0.5.0;

import "./DocumentFactory.sol";

contract DocumentTransfer is DocumentFactory{
    event DocumentTransferred(address _from, address _to, uint _docId);

    function transferDocument(address _from, address _to, uint _docId) public{
        documentToReceiver[_docId] = _to;
        ownerDocumentCount[_to]++;

        emit DocumentTransferred(_from,_to,_docId);
    }
}
