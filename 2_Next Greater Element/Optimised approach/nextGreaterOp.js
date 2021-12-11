/*
Next Greater Element -18:48:46
Description

Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding


Input
The first line contains T, the number of test cases.

The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

Constraints

1 <= T <= 10

1 <= N <= 10^5

0 <= A[i] <= 10000


Output
For each test case, print N space separated integers, denoting the next greater element for each element,  on a new line.

Sample Input 1 

1
4
1 3 2 4

Sample Output 1

3 4 4 -1

Hint

In the sample test case, the array contains 4 elements,
and for the first element, the next greater element will be 3,
similarly for the next element, the next greater element will be 4,
and for the third element as well, the next greater element will be 4. 
Since, the last element has no elements ahead of it, the next greater
element will be -1.

*/

function nextGreaterElement(arr){
    //console.log(arr)
    
        
    var s = [];
    var res = "";
 
   
    s.push(arr[0]);
 
    
    for (var i = 1; i < arr.length; i++)
    {
 
        if (s.length == 0) {
            s.push(arr[i]);
            continue;
        }
 
        while (s.length == 0 == false
              && s[s.length-1] < arr[i])
        {
           
                 res += arr[i] + " ";
            s.pop();
        }
 
        s.push(arr[i]);
    }
 
    while (s.length !=0) {
        res += -1 + " ";
        s.pop();
    }
  return res;
}

function runProgram(input){
    var newInput = input.trim().split("\n");
    for(let i = 2; i<newInput.length; i+=2){
        var data = newInput[i].trim().split(" ").map(Number);
        console.log(nextGreaterElement(data));
    }
}

runProgram(`1
4
1 3 2 4`)