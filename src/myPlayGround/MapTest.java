package myPlayGround;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class MapTest {
	private Map<Integer, Integer> map;
	
	public MapTest(){
		map = new HashMap<Integer, Integer>();
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
