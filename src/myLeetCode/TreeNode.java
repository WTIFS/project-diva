public class TreeNode {
	    public int val;
	    public TreeNode left;
	    public TreeNode right;
	    public TreeNode(int x) { val = x; }
	    public void setLeft(int x) {
	    	left = new TreeNode(x);
		}
		public void setRight(int x) {
	    	right = new TreeNode(x);
		}
}
