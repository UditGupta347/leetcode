/*
 * Approach/Algorithm:
 * This solution uses a two-pointer technique to merge two sorted linked lists. It compares the nodes of both lists and attaches the smaller node to the merged list, advancing the pointer in that list until one list is exhausted, then attaches the remaining list.
 * Time Complexity: O(n + m), where n and m are the lengths of list1 and list2 respectively.
 * Space Complexity: O(1), as it only uses a few extra pointers and no additional data structures.
 */

        if (list1 != null) tail.next = list1;
        if (list2 != null) tail.next = list2;

        return head;
    }
}