        int count = 0;        int count = 0;
        int candidate = 0;        int candidate = 0;

        for(int num : nums) {        for(int num : nums) {
            if(count == 0) {            if(count == 0) {
                candidate = num;                candidate = num;
            }            }

            if(num == candidate) {            if(num == candidate) {
                count++;                count++;
            } else {            } else {
                count--;                count--;
        }        }

        return candidate;        return candidate;
    }    }
class Solution {class Solution {
    public int majorityElement(int[] nums) {    public int majorityElement(int[] nums) {