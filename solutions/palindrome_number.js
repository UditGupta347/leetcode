/*
 * Approach/Algorithm:
 * This solution checks if an integer is a palindrome by reversing the number and comparing it to the original.
 * It first handles negative numbers by returning false. Then, it reverses the number by extracting digits in a loop.
 *
 * Time Complexity: O(log10(x)) - The number of iterations depends on the number of digits in x.
 * Space Complexity: O(1) - Only a few extra variables are used.
 */

class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        int reverse = 0;
        int xcopy = x;

        while (x > 0) {