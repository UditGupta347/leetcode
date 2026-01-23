/*
 * Approach/Algorithm: Brute Force
 * - Iterate through each pair of elements in the array to check if their sum equals the target.
 * Time Complexity: O(n^2) - Nested loops over the array.
 * Space Complexity: O(1) - No additional space used apart from input and output.
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
        return {}; // Handle case where no solution is found (though problem states one exists)
    }
};