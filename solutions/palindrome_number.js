/*
 * Approach/Algorithm:
 * This solution checks if an integer is a palindrome by reversing the number and comparing it to the original. It first handles negative numbers by returning false. Then, it reverses the number by extracting digits in a loop and forming the reversed number.
 * Time Complexity: O(log(x)) where x is the input number, as it processes each digit once.
 * Space Complexity: O(1) since it uses a constant amount of extra space.
 */

class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        int reverse = 0;
        int xcopy = x;

        while (x > 0) {