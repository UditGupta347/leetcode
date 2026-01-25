class Solution {
    public int lengthOfLastWord(String s) {
        String str = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == ' ') {
                if (str.length() > 0) {
                    break;
                }
            } else {
                str = str + s.charAt(i);