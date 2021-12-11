/*
Program to print all substrings of a given string

Input :  abcd
Output :  a 
          b
          c
          d
          ab
          bc
          cd
          abc
          bcd
          abcd

Time complexity: O(N2)
Auxiliary Space: O(1), where N is the length of the input string


*/ 
function findSubstrings(str){
    //console.log(str);
    for(let i = 0; i<str.length; i++){
        var subStr = "";
        for(let j = i; j<str.length; j++){
            subStr += str.charAt(j);
            console.log(subStr);
        }
    }
}

function runProgram(input){
    var newInput = input.trim().split("\n");
    var data = newInput[1];
    findSubstrings(data);
}

runProgram(`5
abcd`)