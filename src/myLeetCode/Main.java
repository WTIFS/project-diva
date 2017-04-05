package myLeetCode;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import myLeetCode.L56MergeIntervals.Interval;

import com.sun.corba.se.impl.orb.ParserTable.TestAcceptor1;
import myLib.myPrinter;

public class Main {
	public static void main(String[] args){
		String s;
		int n;
		ListNode l1, l2;
		s = "asdf";
		TreeNode[] t = new TreeNode[6];
		TreeNode[] t2 = new TreeNode[5];
		int[] nums = new int[]{1,3,5,7,9,2,4,6,8,10};
		
		//for (int i=0; i<t.length; i++)
			//t[i] = new TreeNode(i);

        Map asdf = null;
        myPrinter.pl(asdf==null);

		/*L5LongestPalindromicSubstring test5 = new L5LongestPalindromicSubstring();
		test5.main("bb");
		test5.main("abc");
		test5.main("aba");
		test5.main("abba");
		test5.main("abbbbbbbba");
		test5.main("ababccbaefd");
		test5.main("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");*/

		/*
		L56MergeIntervals test56 = new L56MergeIntervals();
		Interval i1 = test56.new Interval(1,4);
		Interval i2 = test56.new Interval(0,4);
		List<Interval> intervals = new ArrayList<Interval>();
		intervals.add(i1); intervals.add(i2);
		test56.main(intervals);*/
		
		/*
		L208ImplementTrie test208 = new L208ImplementTrie();
		test208.insert("abc");
		test208.insert("asdf");
		System.out.println(test208.search("abc"));
		System.out.println(test208.startsWith("ae"));
		*/
				
		/*
		t[1].right = t[2];
		L230KthSmallestElementInABST test230 = new L230KthSmallestElementInABST();
		test230.main(t[1], 2);
		t[1].right = null;
		t[2].left = t[1];
		test230.main(t[2], 1);*/
		
		/*
		t[0].left = t[1];
		t[0].right = t[2];
		t[1].left = t[3];
		t[1].right = t[4];
		t[3].left = t[5];
		L236LowestCommonAncestorOfABinaryTree test236 = new L236LowestCommonAncestorOfABinaryTree();
		test236.main(t[0], t[5], t[4]);
		test236.main(t[0], t[5], t[2]);*/
		
		
		/*
		L276FirstBadVersion test276= new L276FirstBadVersion();
		nums = new int[]{};
		test276.main(nums, 0);
		nums = new int[]{0};
		test276.main(nums, 1);
		nums = new int[]{1};
		test276.main(nums, 1);
		nums = new int[]{0,1};
		test276.main(nums, 2);
		nums = new int[]{0,0,1};
		test276.main(nums, 3);
		nums = new int[]{0,0,1,1};
		test276.main(nums, 4);*/
		
		/*
		L275HIndexII test275 = new L275HIndexII();
		test275.main(nums);
		
		L274HIndex test274 = new L274HIndex();
		test274.main(nums);
		nums = new int[]{};
		test274.main(nums);
		nums = new int[]{0};
		test274.main(nums);
		nums = new int[]{1};
		test274.main(nums);*/
		
		/*
		Sort testSort = new Sort();
		testSort.main(nums);*/
		
		/*
		char[][] grid = new char[][]{
			"11110".toCharArray(),
			"11010".toCharArray(),
			"11000".toCharArray(),
			"00000".toCharArray()};
		L200NumberOfIslands test200 = new L200NumberOfIslands();
		test200.main(grid);
		grid = new char[][]{
			"11000".toCharArray(),
			"11000".toCharArray(),
			"00100".toCharArray(),
			"00011".toCharArray()};
		test200.main(grid);*/
		
		/*L201BitwiseANDofNumbersRange test201 = new L201BitwiseANDofNumbersRange();
		test201.main(5, 7);*/
		
		/*
		int[] nums = new int[]{0,1,10,11,20,21, 100,101, 1000, 1001, 1010, 1100, 10000, 100000, 100001, 110000, 1234567891};
		L273IntegertoEnglishWords test273 = new L273IntegertoEnglishWords();
		for (int i=0; i<nums.length; i++)
		test273.main(nums[i]);*/
		
		/*
		l1 = new ListNode(1);
		ListNode l1cur = l1;
		for (int i=3; i<9; i++){
			l1cur.next = new ListNode(i/2);
			l1cur = l1cur.next;
		}*/
		
		/*
		L134GasStation test134 = new L134GasStation();
		int[] gas = new int[]{6,1,4,3,5};
		int[] cost = new int[]{3,8,2,4,2};
		test134.main(gas, cost);*/
		
		/*
		L70ClimbingStairs test70 = new L70ClimbingStairs();
		for (int i=1;i<10;i++)
		test70.main(i);*/
		
		/*
		L83RemoveDuplicatesfromSortedList test83 = new L83RemoveDuplicatesfromSortedList();
		test83.main(l1);
		*/
		
		/*
		L38CountandSay test38 = new L38CountandSay();
		test38.main(6);
		*/
		
		/*
		char[][] board = {
				"..4...63.".toCharArray(),
				".........".toCharArray(),
				"5......9.".toCharArray(),
				"...56....".toCharArray(),
				"4.3.....1".toCharArray(),
				"...7.....".toCharArray(),
				"...5.....".toCharArray(),
				".........".toCharArray(),
				".........".toCharArray()};
		L36ValidSudoku test36 = new L36ValidSudoku();
		test36.main(board);
		board = new char[][]{
				 "....5..1.".toCharArray(),
		         ".4.3.....".toCharArray(),
		         ".....3..1".toCharArray(),
		         "8......2.".toCharArray(),
		         "..2.7....".toCharArray(),
		         ".15......".toCharArray(),
		         ".....2...".toCharArray(),
		         ".2.9.....".toCharArray(),
		         "..4......".toCharArray()};
		test36.main(board);
		*/
		
		/*
		for (int i=1; i<5; i++){
			t[i] = new TreeNode(i);//1-4
			t2[i] = new TreeNode(i);
		}
		t[1].left = t[2];
		t[1].right = t2[2];
		t[2].left = t[3];
		t[2].right = t[4];
		t2[2].left = t2[4];
		t2[2].right = t2[3];
		*/
		
		/*
		L101SymmetricTree test101 = new L101SymmetricTree();
		test101.main(t[1]);
		*/
		
		/*
		L214ShortestPalindrome test214 = new L214ShortestPalindrome();
		test214.main(s);
		s = "waaaaaba";
		test214.main(s);
		s = "babbbabbaba";
		test214.main(s);
		*/
		
		/*
		L28ImplementstrStr test28 = new L28ImplementstrStr();
		test28.main(s, "sd");
		test28.main(s, "e");
		test28.main("abbabaaaabbbaabaabaabbbaaabaaaaaabbbabbaabbabaabbabaaaaababbabbaaaaabbbbaaabbaaabbbbabbbbaaabbaaaaababbaababbabaaabaabbbbbbbaabaabaabbbbababbbababbaaababbbabaabbaaabbbba", "bbbbbbaa");		
		*/
		
		/*
		L27RemoveElement test27 = new L27RemoveElement();
		int[] nums = new int[]{1,1,2,6,3,2,1,8};
		int[] nums2 = new int[]{1};
		test27.main(nums, 2);
		test27.main(nums2, 1);
		*/
		
		/*
		L26RemoveDuplicatesfromSortedArray test26 = new L26RemoveDuplicatesfromSortedArray();
		int[] nums = new int[]{1,1,2};
		test26.main(nums);
		*/
		
		/*
		L21MergeTwoSortedLists test21 = new L21MergeTwoSortedLists();
		l1 = new ListNode(1);
		l2 = new ListNode(2);
		ListNode l1cur = l1;
		ListNode l2cur = l2;
		for (int i=3; i<9; i++){
			if (i%2==1){
				l1cur.next = new ListNode(i);
				l1cur = l1cur.next;
			}
			else {
				l2cur.next = new ListNode(i);
				l2cur = l2cur.next;
			}
		}
		test21.main(l1, l2);
		*/
		
		/*
		L264UglyNumberII test264 = new L264UglyNumberII();
		for (int i=0; i<9; i++)
			test264.main(i);
			*/
		
		/*
		L263UglyNumber test263 = new L263UglyNumber();
		for (int i=0; i<9; i++)
		test263.main(i);
		*/
		
		/*
		L258AddDigits test258 = new L258AddDigits();
		test258.main(38);
		*/
		
		/*TreeNode[] nodes = new TreeNode[4];
		for (int i=0; i<nodes.length; i++)
			nodes[i] = new TreeNode(i);
		nodes[0].left = nodes[1];
		nodes[1].right = nodes[2];
		nodes[0].right = nodes[3];
		L257BinaryTreePaths test257 = new L257BinaryTreePaths();
		test257.main(nodes[0]);
		*/
		
		/*L118PascalsTriangle test118 = new L118PascalsTriangle();
		test118.main(6);
		for (int i=0; i<5; i++) test118.main(i);
		*/
		
		//s = "[()[]{}]";
		//L20ValidParentheses test20 = new L20ValidParentheses();
		//System.out.println(test20.isValid(s));
		
		//L22GenerateParentheses test22 = new L22GenerateParentheses();
		/*for (int i=0; i<5; i++)
		{
			System.out.println(test22.generateParenthesis(i));
			System.out.println(test22.generateParenthesis2(i));
		}*/
		
		/*L32LongestValidParentheses test32 = new L32LongestValidParentheses();
		String[] ss={"(()()", "())", "(())", "()()(())(()"};
		for (int i=0; i<4; i++){
			System.out.println(ss[i]);
			System.out.println(test32.main(ss[i]));
		}
		List<String> s3 = test22.generateParenthesis(3);
		for (int i=0; i<s3.size(); i++)
		{
			System.out.println(s3.get(i));
			System.out.println(test32.main(s3.get(i)));
		}*/
		/*
		L125ValidPalindrome test125 = new L125ValidPalindrome();
		s = "ab2a";
		test125.main(s);
		s = "A man, a plan, a canal: Panama";
		test125.main(s);
		s = "race a car";
		test125.main(s);*/

		/*ListNode p1 = new ListNode(1);
		ListNode p2 = new ListNode(2);
		ListNode p3 = new ListNode(3);
		ListNode p4 = new ListNode(4);
		p1.next = p2;
		p2.next = p3;
		p3.next = p4;
		L382LinkedListRandomNode test382 = new L382LinkedListRandomNode(p1);
		for (int i=0; i<1000; i++) {
			System.out.println(test382.getRandom());
		}*/
	}
}
