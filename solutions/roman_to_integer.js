/*
 * Approach/Algorithm:
 * This solution iterates through the Roman numeral string, converting each character to its corresponding integer value.
 * It handles subtractive combinations by checking the next character and subtracting the current value if needed.
 *
 * Time Complexity: O(n), where n is the length of the input string.
 * Space Complexity: O(1), as it uses a fixed amount of extra space.
 */

        return res + roman.get(s.charAt(s.length() - 1));
    }
}