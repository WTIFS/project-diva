package myLeetCode;

public class L230KthSmallestElementInABST {
    public static int count = 0;
    public static int ans = -1;
    
    public int kthSmallest(TreeNode root, int k) {
    	count = 0;
        find(root, k);
        return ans;
    }
    
    public void find(TreeNode root, int k){
        if (root == null) return;
        find(root.left, k);
        count ++;
        System.out.println("count: " + count);
        if (count == k) {ans = root.val;}
        else find(root.right, k);
    }
    
    public void main(TreeNode root, int k){
    	System.out.println(kthSmallest(root, k));
    }
}
