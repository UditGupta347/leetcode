/*
 * Approach/Algorithm:
 * This solution uses a two-pointer technique to merge two sorted linked lists. It compares the nodes of both lists and appends the smaller node to the merged list, advancing the pointer in the corresponding list.
 * Time Complexity: O(n + m), where n and m are the lengths of list1 and list2, respectively.
 * Space Complexity: O(1), as the merging is done in-place without using extra space.
 */

        if (list1 != null) tail.next = list1;
        if (list2 != null) tail.next = list2;

        return head;
    }
}