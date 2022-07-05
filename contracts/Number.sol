// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Num{
 
 uint256 public Get_number;

 function SetNumber ( uint256 _Taken_number) public {
     Get_number = _Taken_number;
 }  

}