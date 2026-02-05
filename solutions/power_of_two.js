/*
  Approach/Algorithm: This solution checks if the input number n is 0 or 1. It returns true if n is 1, implying 2^0. However, it incorrectly returns 1 when n is 0, which should return false as 0 is not a power of two. The solution is incomplete as it does not handle other cases.
  Time Complexity: O(1), as it only performs a constant number of comparisons.
  Space Complexity: O(1), as it uses a constant amount of space.
*/

class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n  == 0 ){
            return 1;
        }
        else if (n==1){
            return true
        }
    }
}