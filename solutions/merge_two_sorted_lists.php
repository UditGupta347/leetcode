/*
 * Approach/Algorithm:
 * This solution merges two sorted linked lists by comparing the nodes of both lists and appending the smaller node to the result list. It uses a dummy node to simplify edge cases and a tail pointer to build the merged list efficiently.
 * Time Complexity: O(n + m), where n and m are the lengths of list1 and list2, respectively.
 * Space Complexity: O(1), as the merge is done in-place without using extra space proportional to input size.
 */

        if (list1 != null) tail.next = list1;
        if (list2 != null) tail.next = list2;

        return head;
    }
}