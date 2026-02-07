/*
 * Approach/Algorithm:
 * This solution uses a HashMap to store the values of Roman numeral symbols and iterates through the string to convert it to an integer.
 * It checks if the current symbol should be subtracted from the next symbol based on the rules of Roman numerals.
 *
 * Time Complexity: O(n), where n is the length of the input string.
 * Space Complexity: O(1), as the HashMap uses constant space.
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