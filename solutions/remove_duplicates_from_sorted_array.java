/**
 * Approach/Algorithm:
 * - Uses a two-pointer technique where one pointer (j) tracks the position of the last unique element,
 *   and another pointer (i) iterates through the array to find the next unique element.
 * - When a unique element is found, it is placed right after the last unique element.
 * Time Complexity: O(n) - We traverse the array once with the pointer i.
 * Space Complexity: O(1) - We use a constant amount of extra space.
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