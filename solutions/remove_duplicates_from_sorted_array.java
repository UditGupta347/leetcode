/**
 * Approach/Algorithm:
 * - Uses a two-pointer technique where one pointer (j) tracks the position of the last unique element,
 *   and another pointer (i) iterates through the array to find new unique elements.
 * - When a new unique element is found, it is placed at the next position after j.
 * - Finally, the length of the array with duplicates removed is returned (j + 1).
 *
 * Time Complexity: O(n) - We traverse the array once with the pointer i.
 * Space Complexity: O(1) - The operation is done in-place without using extra space.
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