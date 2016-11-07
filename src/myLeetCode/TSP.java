package myLeetCode;

import java.util.HashSet;
import java.util.Set;

import myLib.myPrinter;

//Traveling Salesman Problem
//有n个城市，用1，2，…，n表示，城i,j之间的距离为dij，有一个货郎从城1出发到其他城市一次且仅一次，最后回到城市1，怎样选择行走路线使总路程最短？

public class TSP {
	static int[][] graph = new int[][]{
			{0, 6, 7, 9},
			{8, 0, 9, 7},
			{5, 8, 0, 8},
			{6, 5, 5, 0}
	};
	static int[] path;
	
	public static int go(int start, Set<Integer> intervals, int destination){
		if (intervals.size()==1) return (int)intervals.toArray()[0];
		int min = Integer.MAX_VALUE;
		for (int interval:intervals){
			intervals.remove(interval);
			if (go(start, intervals, interval) + graph[interval][destination] < min){
				min = go(start, intervals, interval) + graph[interval][destination];
				path[destination] = interval;
			}
			intervals.add(interval);
		}
		return min;
	}
	
	public static void main(String[] args){
		Set<Integer> intervals = new HashSet<>();
		path = new int[graph.length];
		for (int i=0; i<graph.length; i++)
			intervals.add(i);
		myPrinter.pr(go(0, intervals, 0));
	}
}
