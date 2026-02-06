/*
This solution converts a Roman numeral to an integer by iterating through the string and checking each character and its following character. If the current character's value is less than the next character's value, it subtracts the current value; otherwise, it adds the current value to the result.
Time Complexity: O(n), where n is the length of the input string.
Space Complexity: O(1), as it uses a constant amount of extra space.
*/

        return res + roman.get(s.charAt(s.length() - 1));
    }
}