/*
 * Approach/Algorithm:
 * This solution checks if an integer is a palindrome by reversing the number and comparing it to the original.
 * It first handles negative numbers by returning false, then reverses the number using a loop.

 * Time Complexity: O(log10(n)) where n is the value of x.
 * Space Complexity: O(1)
 */

class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        int reverse = 0;
        int xcopy = x;

        while (x > 0) {