/*
 * Approach/Algorithm: Brute Force
 * - Iterate through each pair of elements in the array to check if their sum equals the target.
 * Time Complexity: O(n^2) - Nested loops result in quadratic time complexity.
 * Space Complexity: O(1) - Uses constant extra space.
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
        }
        return {}; // Return empty vector if no solution found (though problem guarantees one)
    }
};