/*
 * Approach/Algorithm:
 * This solution attempts to check if a number is a power of two by first handling edge cases (n=0, n=1)
 * and then iterating to check if n matches any power of two, though the loop is incomplete.
 * Time Complexity: O(n), where n is the input number.
 * Space Complexity: O(1)
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