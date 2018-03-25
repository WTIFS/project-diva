package myLib;

import myLeetCode.TreeNode;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class myPrinter {

	public static void pl() {
		System.out.println();
	}

	public static void pr(int[] nums){
		for (int i=0; i<nums.length; i++)
			System.out.print(nums[i] + " ");
		System.out.println();
	}
	
	public static void pr(int num){
		System.out.println(num);
	}
	public static void pl(String s){
		System.out.println(s);
	}
	public static void pl(double s){
		System.out.println(s);
	}

    public static void pl(boolean s){
		System.out.println(s);
	}

	public static void pr(List l){
		for (int i=0; i<l.size(); i++)
			System.out.print(l.get(i) + " ");
		System.out.println();
	}

	public static void pl(TreeNode root) {
		Queue<TreeNode> nextRow = new LinkedList<>();
		nextRow.offer(root);
		while (!nextRow.isEmpty()) {
			Queue<TreeNode> currentRow = nextRow;
			ArrayList<Integer> currentList = new ArrayList<>();
			nextRow = new LinkedList<>();
			for (TreeNode p: currentRow) {
				currentList.add(p.val);
				if (p.left != null) nextRow.add(p.left);
				if (p.right != null) nextRow.add(p.right);
			}
			System.out.println(StringUtils.join(currentList.iterator(), ", "));
		}
	}
}


