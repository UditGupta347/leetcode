/* 
 * Solution for palindrome_number
 * AI logic generation failed: OpenRouter API error: This request requires more credits, or fewer max_tokens. You requested up to 1000 tokens, but can only afford 371. To increase, visit https://openrouter.ai/settings/credits and upgrade to a paid account
 */

class Solution {class Solution {
    public boolean isPalindrome(int x) {    public boolean isPalindrome(int x) {
        if (x < 0) {        if (x < 0) {
            return false;            return false;
        }        }

        int reverse = 0;        int reverse = 0;
        int xcopy = x;        int xcopy = x;

        while (x > 0) {        while (x > 0) {
            reverse = (reverse * 10) + (x % 10);            reverse = (reverse * 10) + (x % 10);
            x /= 10;            x /= 10;
        }        }

        return reverse == xcopy;                return reverse == xcopy;
    }    }
}}