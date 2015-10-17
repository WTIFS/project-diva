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
	
	public static void main(String[] args) {
		String a = "abc";
		String b = "abc";
		String c = "ab" + "c";

		String d = "ab";
		String e = d + "c";
		String f = new String("abc");
		String g = new String("abc");

		System.out.println(a == b);//true
		System.out.println(a == c);//true

		System.out.println(a == e);//false
		System.out.println(a == f);//false
		System.out.println(f == g);//false

		ChangeS(a);
		System.out.println(a);//not change

		ChangeS2(a);
		System.out.println(a);//not change

		StringBuilder sb = new StringBuilder("lol");
		ChangeSB(sb);
		System.out.println(sb);//changed

		testEncode(a);
		System.out.println("渣");
	}

	//字符编码
	//Ref: http://jiapumin.iteye.com/blog/1006144
	public static void testEncode(String s){
		try {
			//getBytes(charset): 使用指定charset编码
			byte[] s_utf_enc = s.getBytes("UTF-8");
			System.out.println(s_utf_enc);

			/**
			 * new String(byte, charset):使用制定charset解码
			 * Constructs a new {@code String} by decoding the specified array of bytes
			 * using the specified {@linkplain java.nio.charset.Charset charset}.  The
			 * length of the new {@code String} is a function of the charset, and hence
			 * may not be equal to the length of the byte array.
			 */
			String s_gbk_dec = new String(s_utf_enc, "GBK");
			System.out.println(s_gbk_dec);

			//起始地用ISO编码
			String s_iso88591 = new String("中".getBytes("UTF-8"), "ISO8859-1");
			System.out.println(s_iso88591);
			//目的地用ISO解码，UTF编码
			String s_utf8 = new String(s_iso88591.getBytes("ISO8859-1"), "UTF-8");
			System.out.println(s_utf8);
			System.out.println("中");
		}
		catch(Exception ex){

		}
	}
}
