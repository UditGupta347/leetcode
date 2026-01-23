/**
 * Approach/Algorithm:
 * - Uses a two-pointer technique where one pointer (j) tracks the position of the last unique element,
 *   and another pointer (i) iterates through the array to find new unique elements.
 * - When a new unique element is found, it is placed right after the last unique element.
 * Time Complexity: O(n) - Single pass through the array
 * Space Complexity: O(1) - In-place modification, no extra space used
 */
class Solution {
    public int removeDuplicates(int[] nums) {
        int j = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[j] != nums[i]) {
                nums[++j] = nums[i];
            }
        }
        return ++j;
    }
}