package myPlayGround;

public class TestString {
	
	public static void ChangeS(String s){
		s = "fff";
	}
	
	public static void ChangeS2(String s){
		s = new String("fff");
	}
	
	public static void ChangeSB(StringBuilder sb){
		sb.append("yoo");
	}
	
	public static void main(String[] args){
		String a = "abc";
		String b = "abc";
		String c = "ab"+"c";
		
		String d = "ab";
		String e = d + "c";
		String f = new String("abc");
		String g = new String("abc");
		
		System.out.println(a==b);//true
		System.out.println(a==c);//true
		
		System.out.println(a==e);//false
		System.out.println(a==f);//false
		System.out.println(f==g);//false
		
		ChangeS(a);
		System.out.println(a);//not change

		ChangeS2(a);
		System.out.println(a);//not change
		
		StringBuilder sb = new StringBuilder("lol");
		ChangeSB(sb);
		System.out.println(sb);//changed
	}
}
