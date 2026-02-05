/*
 * Approach/Algorithm:
 * This solution attempts to check if both input lists are non-null and returns 0 if true. However, it does not actually merge the lists.
 * Time Complexity: O(1), as it only performs a single conditional check.
 * Space Complexity: O(1), as it does not use any additional space.
 */

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if(list1 && list2 == null){
            return 0;
        }
    }

}