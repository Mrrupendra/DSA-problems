/*
Given an array A of N elements that contains elements from 1 to N-1. All elements occur once except one which occurs twice. Find the repeating element.

Sample Input
N = 5, A = [1, 3, 3, 2, 4].

Sample Output
Output: 3

Sample Explanation
Element 3 appears twice in the array. Hence it is the only repeating element.

Expected Time Complexity
O(N), where N is the size of the array

Expected Space Complexity
O(1), i.e., constant space complexity.

Constraints
1 <= N <= 100000

Hint:
The sum of first N natural numbers is given sum = N * (N + 1)/2

Short Explanation:
In this question we are given an array A, of size N, having values between 1 to N-1, 
such that all the numbers occur once except for one, which occurs twice. A simple 
intuitive solution would be to find the sum of all the elements in the array, 
and also to find the sum of first (N-1) natural numbers using the formula given in the
hint. The difference between the two sums, will be the element that is occuring twice.

*/

// Solution - 


function duplicateArray(arr, n){
    //console.log(arr, n);
    let sum1 = 0;
    let sum2 = 0;
    let res;
    for(let i = 0; i<n; i++){
       sum1 += arr[i];
    }
    let m = n-1;
    sum2 = (m * (m + 1))/2;
    res = sum1- sum2;
    return res;
}

function runProgram(input){
    var newInput = input.trim().split("\n");
    let data = newInput[1].trim().split(" ").map(Number);
    let n = data.length;
    console.log(duplicateArray(data, n));
}

runProgram(`5
1 3 4 2 4`)