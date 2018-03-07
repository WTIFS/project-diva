package myLeetCode;

/*
Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

Example 1:
Input:
    2
   / \
  2   5
     / \
    5   7

Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.
Example 2:
Input:
    2
   / \
  2   2

Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
*/

public class L671SecondMinimumNodeInABinaryTree {

    static class Solution {

        private int min;
        private int candidate;

        public int findSecondMinimumValue(TreeNode root) {
            min = root.val;
            candidate = Integer.MAX_VALUE;
            dfs(root);
            if (candidate == Integer.MAX_VALUE) return -1;
            else return candidate;
        }

        public void dfs(TreeNode root) {
            if (root == null || root.val > candidate) return;
            if (root.val != min && root.val < candidate) {
                candidate = root.val;
                return;
            }
            dfs(root.left);
            dfs(root.right);
        }
    }



    public static void main (String[] args) {
        TreeNode root = new TreeNode(2);
        root.setLeft(2);
        root.setRight(5);
        root.right.setLeft(5);
        root.right.setRight(7);
        int ans = new Solution().findSecondMinimumValue(root);
        System.out.println(ans);
        System.out.println();

        root = new TreeNode(2);
        root.setLeft(2);
        root.setRight(5);
        root.left.setLeft(3);
        root.left.setRight(2);
        root.right.setLeft(5);
        root.right.setRight(7);
        ans = new Solution().findSecondMinimumValue(root);
        System.out.println(ans);

    }

}
