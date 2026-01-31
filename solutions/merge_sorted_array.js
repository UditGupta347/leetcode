/*
 * Approach/Algorithm:
 * This solution first copies all elements from nums2 into the end of nums1, then sorts nums1.
 * Time Complexity: O((m + n) log(m + n)) due to the sorting operation.
 * Space Complexity: O(1) as no extra space is used apart from the input arrays.
 */

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for(int j=0 , i = m ; j < n ; j++){
            nums1[i]  = nums2[j];
            i++;
        }
        Arrays.sort(nums1);
    }
}