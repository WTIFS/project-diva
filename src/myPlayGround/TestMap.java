package myPlayGround;

import java.util.*;
import java.util.Map.Entry;

class TMap {
	private Map<Integer, Integer> map;
	
	public TMap(){
		map = new HashMap<Integer, Integer>();
		
		Map<Integer,ArrayList<Integer>> map = new HashMap<Integer, ArrayList<Integer>>();
		for (Map.Entry<Integer, ArrayList<Integer>> e:map.entrySet()){
			
		}
	}
	
	public void print1(){
		for (int key: map.keySet()) 
			System.out.println(key + ": " + map.get(key));
	}
	
	public void print2(){
		Iterator<Map.Entry<Integer, Integer>> iterator = map.entrySet().iterator();
		while (iterator.hasNext()){
			Map.Entry<Integer, Integer> entry = iterator.next();
			System.out.println(entry.getKey() + ": " + entry.getValue());
		}
	}
	
	public void print3(){
		for (Map.Entry<Integer, Integer> entry: map.entrySet())
			System.out.println(entry.getKey() + ": " + entry.getValue());
	}
	
	public void print4(){
		Integer[] keys = map.keySet().toArray(new Integer[map.size()]);
	}
}

public class TestMap {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        set.add("asdf");
        set.add("asdf");
        System.out.print(set);
    }
}