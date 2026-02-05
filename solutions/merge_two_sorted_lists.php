/*
 * Approach/Algorithm: This solution uses a iterative approach to merge two sorted linked lists. It compares the nodes of both lists and appends the smaller node to the merged list.
 * Time Complexity: O(n + m), where n and m are the lengths of the two lists.
 * Space Complexity: O(1), as only a few pointers are used for manipulation.
 */

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

        if (list1 == null) return list2;
        if (list2 == null) return list1;

        ListNode head = null;
        ListNode tail = null;