//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract TransferOwner{

    address public OwnerAddr;
    //check owner
    modifier OnlyOwner() {
      require(msg.sender == OwnerAddr , "you are not owner" );
      _;
    }
    // make new owner 
    function SetOwner (address NewOwner) public OnlyOwner {
    require (NewOwner != address(0) , "Invalid Address") ;
    OwnerAddr = NewOwner;
    }

}
