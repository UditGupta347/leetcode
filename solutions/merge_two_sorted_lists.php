/*
 * Approach/Algorithm:
 * This solution merges two sorted linked lists by comparing the nodes of each list and appending the smaller node to the result list. It uses a dummy node to simplify edge cases and a tail pointer to build the merged list.
 * Time Complexity: O(n + m), where n and m are the lengths of the two lists.
 * Space Complexity: O(1), as it only uses a few extra pointers.
 */

        if (list1 != null) tail.next = list1;
        if (list2 != null) tail.next = list2;

        return head;
    }
}