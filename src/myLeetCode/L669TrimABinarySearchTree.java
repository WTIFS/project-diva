package myLeetCode;

import myLib.myPrinter;

/**

 Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

 Example 1:
 Input:
 1
 / \
 0   2

 L = 1
 R = 2

 Output:
 1
 \
 2
 Example 2:
 Input:
     3
   /   \
 0      4
   \
    2
   /
 1

 L = 1
 R = 3

 Output:
 3
 /
 2
 /
 1

 */

public class L669TrimABinarySearchTree {











    static class Solution {

        public TreeNode trimBST(TreeNode root, int L, int R) {
            if (root == null) return root;
            if (root.val < L) return trimBST(root.right, L, R);
            if (root.val > R) return trimBST(root.left, L, R);
            root.left = trimBST(root.left, L, R);
            root.right = trimBST(root.right, L, R);
            return root;
        }
    }


    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.setLeft(0);
        root.setRight(2);

        new Solution().trimBST(root, 1, 2);
        myPrinter.pl(root);
        myPrinter.pl();

        root = new TreeNode(3);
        root.setLeft(0);
        root.setRight(4);
        root.left.setRight(2);
        root.left.right.setLeft(1);
        root = new Solution().trimBST(root, 0, 1);
        myPrinter.pl(root);
    }

}


