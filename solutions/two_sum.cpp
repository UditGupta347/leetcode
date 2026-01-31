/*
 * Approach/Algorithm: This solution uses a brute-force approach, checking all possible pairs of numbers in the array to see if their sum equals the target.
 * Time Complexity: O(n^2), where n is the number of elements in the array.
 * Space Complexity: O(1), no additional space is used except for the output vector.
 */

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }