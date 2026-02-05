/*
This solution attempts to check if a number is a power of two by first handling edge cases (n == 0 or n == 1) and then using a loop to check if n equals 2 raised to the power of i. However, the loop and the condition inside it are incomplete and incorrectly implemented.

The approach is flawed and does not correctly solve the problem.

Time Complexity: O(n) (due to the loop, but the loop is incomplete)
Space Complexity: O(1)
*/

class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n  == 0 ){
            return 1;
        }
        else if (n==1){
            return true;
        }
        for(int i=0 ; i < n ; i++){
            if( n == )