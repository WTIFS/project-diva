/**
 * Created by WTIFS-Mac on 2018/4/3.

 Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

 Example 1:
 Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 Output: True
 Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
 Note:

 1 <= k <= len(nums) <= 16.
 0 < nums[i] < 10000.

 */
public class L698PartitionToKEqualSumSubsets {

    public boolean canPartitionKSubsets(int[] nums, int k) {
        int[] visited = new int[nums.length];
        int sum = 0;
        for (int num: nums) sum += num;
        if (sum % k>0) return false;
        return dfs(nums, visited, 0, 0, k, sum/k);
    }

    public boolean dfs(int[] nums, int[] visited, int start, int currentSum, int k, int target) {
        if (k==1) return true;
        if (currentSum>target) return false;
        if (currentSum==target) return dfs(nums, visited, 0, 0, k-1, target);
        for (int i=start; i<nums.length; i++) {
            if (visited[i]==1) continue;
            visited[i] = 1;
            if (dfs(nums, visited, start+1, currentSum+nums[i], k, target)) return true;
            visited[i] = 0;
        }
        return false;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{5,2,5,5,5,5,5,5,5,5,5,5,5,5,5,3};
        boolean result = new L698PartitionToKEqualSumSubsets().canPartitionKSubsets(nums, 15);
        System.out.println(result);
    }

}
