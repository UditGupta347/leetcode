/*
 * Approach/Algorithm:
 * This solution checks if a number is a power of two by continuously dividing the number by 2 until it is no longer even. If the resulting number is 1, then the original number is a power of two.
 * Time Complexity: O(log n), where n is the input number.
 * Space Complexity: O(1), as it uses a constant amount of space.
 */

class Solution {class Solution {
    public boolean isPowerOfTwo(int n) {    public boolean isPowerOfTwo(int n) {

        if (n <= 0) return false;        if (n <= 0) return false;

        while (n % 2 == 0) {        while (n % 2 == 0) {
            n = n / 2;            n = n / 2;
        }        }

        return n == 1;        return n == 1;
    }    }
}}