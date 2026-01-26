class Solution {
    public int majorityElement(int[] nums) {

        for(int i=0;i<nums.length;i++){
            if(nums.charAt(i)>nums.charAt(i+1)){
                i++;
            }
        }
        return nums.charAt[i];
    }