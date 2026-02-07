/*
 * Approach/Algorithm:
 * This solution uses a HashMap to map Roman numeral characters to their respective integer values.
 * It iterates through the string, checking if the current character's value is less than the next character's value
 * (indicating a subtractive combination) and adjusts the result accordingly.
 *
 * Time Complexity: O(n), where n is the length of the input string.
 * Space Complexity: O(1), as the HashMap size is constant and does not depend on the input size.
 */

class Solution {
    public int romanToInt(String s) {
        int res = 0;
        Map<Character, Integer> roman = new HashMap<>();
        roman.put('I', 1);
        roman.put('V', 5);
        roman.put('X', 10);
        roman.put('L', 50);
        roman.put('C', 100);
        roman.put('D', 500);