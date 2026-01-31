/*
 * Approach/Algorithm:
 * Traverse the linked list and remove nodes with the target value. Use a dummy node to handle edge cases where the head node might be removed.
 * Time Complexity: O(n), where n is the number of nodes in the linked list.
 * Space Complexity: O(1), as we are only using a constant amount of extra space.
 */

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */