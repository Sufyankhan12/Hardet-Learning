// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Num{
 
 uint  public Get_number;

 function SetNumber ( uint _Taken_number) public {
     Get_number = _Taken_number;
 }  

}