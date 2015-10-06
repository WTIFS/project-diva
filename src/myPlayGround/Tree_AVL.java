package myPlayGround;


class TreeNode <T extends Comparable<T>>{
	T data;
	TreeNode<T> left;
	TreeNode<T> right;
	int height;
	
	public TreeNode(){
		data = null;
		left = null;
		right = null;
		height = -1;
	}
	
	public TreeNode(T t){
		data = t;
		left = null;
		right = null;
		height = t==null? -1:0;
	}
	
	public int getLH(){
		if (left!=null) return left.height;
		else return -1;
	}
	
	public int getRH(){
		if (right!=null) return right.height;
		else return -1;
	}
	
	public void setHeight(int h){
		height = h;
	}
}


public class Tree_AVL <T extends Comparable<T>>{

	TreeNode<T> root;
	
	public Tree_AVL(){
		root = null;
	}
	
	public Tree_AVL(T t){
		root = new TreeNode<T>(t);
	}
	
	public TreeNode<T> getRoot(){
		if (root.data == null) return null;
		return root;
	}
	
	public boolean isEmpty(){
		return root.data == null;
	}
	
	public void add(T t){
		if (t == null) return;
		else root = add(root, t);
	}
	
	public TreeNode<T> add(TreeNode<T> root, T t){
		if (root == null){
			root = new TreeNode<T>(t);
			return root;
		}
		
		int cp = t.compareTo((T) root.data);
		if (cp==0) return root;
		//t<root, insert to left
		else if (cp<0) {
			root.left = add(root.left, t);
			if (root.getLH() - root.getRH()==2){
				if (t.compareTo(root.left.data)<0) root = rotateLeft(root);
				else root = rotateLR(root);
			}
		}
		else {
			root.right = add(root.right, t);
			if (root.getRH() - root.getLH()==2){
				if (t.compareTo(root.right.data)>0) root = rotateRight(root);
				else root = rotateRL(root);
			}
		}
		root.setHeight( Math.max(root.getLH(), root.getRH()) + 1);
		return root;
	}
	
	public void remove(T t){
		root = remove(root,t);
	}
	
	public TreeNode<T> remove(TreeNode<T> root, T t){
		if (t==null || root==null) return null;
		int cmp = t.compareTo(root.data);
		if (cmp<0) {
			root.left = remove(root.left, t);
			if (root.getRH() - root.getLH()>=2){
				if (root.right.getRH()>root.right.getLH()) root = rotateRight(root);
				else root = rotateRL(root);
			}
		}
		else if (cmp>0) {
			root.right = remove(root.right, t);
			if (root.getLH() - root.getRH()>=2){
				if (root.left.getLH()>root.left.getRH()) root = rotateLeft(root);
				else root = rotateLR(root);
			}
		}
		else{
			if (root.left==null) root = root.right;
			else{
				root.data = findMax(root.left).data;
				remove(root.left, t);
				if (root.right!=null && root.getRH() - root.getLH()>=2){
					if (root.right.getRH()>root.right.getLH()) root = rotateRight(root);
					else if (root.right.getLH()>root.right.getRH()) root = rotateRL(root);
				}
			}
		}
		if (root!=null) root.height = Math.max(root.getLH(), root.getRH()) + 1;
		return root;
	}
	
	public TreeNode<T> findMax(TreeNode<T> root){
		if (root!=null && root.right!=null) return findMax(root.right);
		else return root;
	}
	
	private TreeNode<T> find(T t){
		TreeNode<T> tmp = root;
		while (t!=null && tmp!=null){
			int cp = t.compareTo(tmp.data);
			if (cp==0) return tmp;
			if (cp>0) tmp = tmp.right;
			else tmp = tmp.left;
		}
		return null;
	}
	
	private TreeNode<T> rotateLeft(TreeNode<T> root){
		TreeNode<T> L = root.left;
		TreeNode<T> LR = root.left.right;
		
		L.right = root;
		root.left = LR;
		
		root.height = Math.max(root.getLH(), root.getRH()) + 1;
		L.height = Math.max(L.getLH(), root.height) + 1;
		
		return L;
	}
	
	private TreeNode<T> rotateRight(TreeNode<T> root){
		TreeNode<T> R = root.right;
		TreeNode<T> RL = root.right.left;
		
		R.left = root;
		root.right = RL;
		
		root.height = Math.max(root.getLH(), root.getRH()) + 1;
		R.height = Math.max(root.height, R.getRH()) + 1;
		
		return R;
	}
	
	private TreeNode<T> rotateLR(TreeNode<T> root){
		root.left = rotateRight(root.left);
		return rotateLeft(root);
	}
	
	private TreeNode<T> rotateRL(TreeNode<T> root){
		root.right = rotateLeft(root.right);
		return rotateRight(root);
	}
	
	
	public void serializePrefix(TreeNode<T> root, StringBuilder sb, String sep){
		if (root==null) return;
		sb.append(root.data.toString()+sep);
		serializePrefix(root.left, sb, sep);
		serializePrefix(root.right, sb, sep);
	}
	
	//中序
	private String inorderTraverse(){
		StringBuilder sb = new StringBuilder();
		serializePrefix(root, sb, " ");
		return sb.toString();
	}
	
	//前序
	private static void preorderTraverse(){
		
	}
	
	public static void main(String[] args){
		Tree_AVL<Integer> t = new Tree_AVL<Integer>();
		t.add(1);
		t.add(2);
		t.add(6);
		t.add(7);
		t.remove(7);
		t.add(7);
		t.remove(1);
		
		System.out.println(t.inorderTraverse());
	}
}
