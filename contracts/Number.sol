// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

contract Num{
  uint public getnumber;
    function SetNumber ( uint _Taken_number) public{
       getnumber =  _Taken_number;       
     }  
    function getNumber() public view returns(uint){
       return getnumber;
     }
}