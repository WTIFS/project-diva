package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/29.

 Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

 Note: The length of path between two nodes is represented by the number of edges between them.

 Example 1:

 Input:

 5
 / \
 4   5
 / \   \
 1   1   5
 Output:

 2
 Example 2:

 Input:

 1
 / \
 4   5
 / \   \
 4   4   5
 Output:

 2
 Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

 */
public class L687LongestUnivaluePath {

    public int longestUnivaluePath(TreeNode root) {
        if (root == null) return 0;
        TreeNode result = new TreeNode(0);
        dfs(root, result);
        return result.val;
    }

    public int dfs(TreeNode root, TreeNode result) {
        int left = root.left!=null? dfs(root.left, result): 0;
        int right = root.right!=null? dfs(root.right, result): 0;
        int leftByRoot = (root.left!=null && root.val==root.left.val) ? left+1 : 0;
        int rightByRoot = (root.right!=null && root.val==root.right.val) ? right+1 : 0;
        result.val = Math.max(result.val, leftByRoot+rightByRoot);
        return Math.max(leftByRoot, rightByRoot);
    }

}
