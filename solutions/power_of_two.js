/*
This solution attempts to check if a number is a power of two by first handling edge cases (n=0, n=1) and then using a loop to check if n equals 2 raised to the power of i.
However, the loop and the condition inside are incomplete, making the solution non-functional.
Time Complexity: O(n) due to the loop (if completed)
Space Complexity: O(1) as it uses a constant amount of space
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