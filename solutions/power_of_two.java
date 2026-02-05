/*
 * Approach/Algorithm:
 * This solution repeatedly divides the input number by 2 as long as it is even,
 * then checks if the result is 1 to determine if the input is a power of two.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
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