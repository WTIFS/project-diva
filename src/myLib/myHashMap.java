package myLib;

public class myHashMap {
	
	private static final int SIZE = 16;
	private Entry table[] = new Entry[SIZE];
	
	class Entry{
		final String key;
		String value;
		Entry next; //链表
		
		Entry(String k, String v){
			key = k;
			value = v;
		}
		
		public String getKey(){
			return key;
		}
		
		public String getValue(){
			return value;
		}
		
		public void setValue(String v){
			value = v;
		}
	}
	
	public Entry get(String k){
		int hash = k.hashCode() % SIZE;
		Entry e = table[hash];
		
		while (e!=null){
			if (e.key.equals(k)) return e;
			else e = e.next;
		}
		return null;
	}
	
	public void put(String k, String v){
		int hash = k.hashCode() % SIZE;
		Entry e = table[hash];
		if (e==null) table[hash] = new Entry(k, v);
		else{
			while (e.next!=null && !e.key.equals(k)){
				e = e.next;
			}
			if (e.key.equals(k)) e.value = v;
			else e.next = new Entry(k, v);
		}
	}
	
	public static void main(String[] args){
		myHashMap map = new myHashMap();
		
		map.put("abs", "sab");
		map.put("bb", "BB");
		map.put("cc", "CC");
		map.put("dd", "DD");
		map.put("ee", "EE");
		
		Entry e = map.get("abs");
		System.out.println(e.getValue());
	}
	
}
