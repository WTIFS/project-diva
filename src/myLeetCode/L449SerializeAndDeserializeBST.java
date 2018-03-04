package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/1.
 */

import java.util.LinkedList;

/**

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

 **/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

public class L449SerializeAndDeserializeBST {

    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    static class Codec {

        // Encodes a tree to a single string.
        static public String serialize(TreeNode root) {
            if (root == null) return "";
            LinkedList<TreeNode> currentRow;
            LinkedList<TreeNode> nextRow = new LinkedList<>();
            LinkedList<String> result = new LinkedList<>();
            nextRow.add(root);

            while (nextRow.size() > 0) {
                currentRow = nextRow;
                nextRow = new LinkedList<>();
                while (currentRow.size() > 0) {
                    TreeNode p = currentRow.pop();
                    if (p != null) {
                        result.add(String.valueOf(p.val));
                        nextRow.add(p.left);
                        nextRow.add(p.right);
                    } else result.add("null");
                }
            }

            while (result.size()>0 && result.getLast().equals("null")) result.pollLast();
            StringBuilder sb = new StringBuilder();
            for (String s: result) sb.append(s).append(",");
            sb.delete(sb.length() - 1, sb.length());
            return sb.toString();
        }

        // Decodes your encoded data to tree.
        static public TreeNode deserialize(String data) {
            if (data.equals("")) return null;

            LinkedList<String> stringList = new LinkedList<>();
            LinkedList<TreeNode> treeNodes = new LinkedList<>();
            int i=0;
            while (i<data.length()) {
                int j = i;
                String s = "";
                while (j<data.length() && data.charAt(j) != ',') {
                    s += data.charAt(j);
                    j++;
                }
                stringList.add(s);
                i = j+1;
            }

            String rootStr = stringList.poll();
            TreeNode root = new TreeNode(Integer.parseInt(rootStr));
            treeNodes.add(root);
            for (int j=0; j<stringList.size(); j+=2) {
                TreeNode p = treeNodes.poll();
                if (!stringList.get(j).equals("null")) {
                    p.left = new TreeNode(Integer.parseInt(stringList.get(j)));
                    treeNodes.add(p.left);
                }
                if (j+1<stringList.size() && !stringList.get(j + 1).equals("null")) {
                    p.right = new TreeNode(Integer.parseInt(stringList.get(j + 1)));
                    treeNodes.add(p.right);
                }
            }
            return root;
        }
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(1);
//        root.right = new TreeNode(3);
        String s = Codec.serialize(root);
        System.out.println(s);
        TreeNode r2 = Codec.deserialize(s);
        System.out.println(Codec.serialize(r2));
    }
}
