/*
 * Approach/Algorithm: This solution uses the Gauss formula to calculate the sum of the first n natural numbers and then subtracts the sum of the given array to find the missing number.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
    public int missingNumber(int[] nums) {
        int res = nums.length;

        for(int i=0;i<nums.length;i++){
            res+= i - nums[i];
        }
        return res;
    }
}