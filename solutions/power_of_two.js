/*
 * Approach/Algorithm:
 * This solution attempts to check if a number is a power of two by first handling edge cases (n == 0 or n == 1)
 * and then uses a loop to iterate up to n. However, the solution is incomplete as the loop's condition is missing.
 *
 * Time Complexity: O(n) due to the loop that iterates up to n (if completed).
 * Space Complexity: O(1) as it uses a constant amount of space.
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
            if()