/*
 * Approach/Algorithm:
 * This solution attempts to check if a number is a power of two by first handling edge cases (0 and 1)
 * and then iterating to check if the number matches any power of two.
 *
 * Time Complexity: O(n) due to the loop that may run up to n times.
 * Space Complexity: O(1) as it uses a constant amount of extra space.
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