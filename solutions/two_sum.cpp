/**
 * Approach/Algorithm: Brute Force
 * - Iterate through each element in the array and check every other element to find a pair that sums to the target.
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
        return {}; // This line was missing in the original code, added to make it complete
    }
};