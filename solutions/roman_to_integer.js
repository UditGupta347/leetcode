/* 
 * Solution for roman_to_integer
 * AI logic generation failed: OpenRouter API error: This request requires more credits, or fewer max_tokens. You requested up to 1000 tokens, but can only afford 371. To increase, visit https://openrouter.ai/settings/credits and upgrade to a paid account
 */

class Solution {class Solution {
    public int romanToInt(String s) {    public int romanToInt(String s) {
        int res = 0;        int res = 0;
        Map<Character, Integer> roman = new HashMap<>();        Map<Character, Integer> roman = new HashMap<>();
        roman.put('I', 1);        roman.put('I', 1);
        roman.put('V', 5);        roman.put('V', 5);
        roman.put('X', 10);        roman.put('X', 10);
        roman.put('L', 50);        roman.put('L', 50);
        roman.put('C', 100);        roman.put('C', 100);
        roman.put('D', 500);        roman.put('D', 500);
        roman.put('M', 1000);        roman.put('M', 1000);

        for (int i = 0; i < s.length() - 1; i++) {        for (int i = 0; i < s.length() - 1; i++) {
            if (roman.get(s.charAt(i)) < roman.get(s.charAt(i + 1))) {            if (roman.get(s.charAt(i)) < roman.get(s.charAt(i + 1))) {
                res -= roman.get(s.charAt(i));                res -= roman.get(s.charAt(i));
            } else {            } else {
                res += roman.get(s.charAt(i));                res += roman.get(s.charAt(i));
            }            }
        }        }

        return res + roman.get(s.charAt(s.length() - 1));                return res + roman.get(s.charAt(s.length() - 1));
    }    }
}}