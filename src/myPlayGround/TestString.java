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
		System.out.println("��");

		String chineseTest = "我要金坷垃";
		String chineseTest2 = "I want 金坷垃";
		System.out.println(chineseTest + ": " + chineseTest.length());
		System.out.println(chineseTest2 + ": " + chineseTest2.length());
	}

	//�ַ�����
	//Ref: http://jiapumin.iteye.com/blog/1006144
	public static void testEncode(String s){
		try {
			//getBytes(charset): ʹ��ָ��charset����
			byte[] s_utf_enc = s.getBytes("UTF-8");
			System.out.println(s_utf_enc);

			/**
			 * new String(byte, charset):ʹ���ƶ�charset����
			 * Constructs a new {@code String} by decoding the specified array of bytes
			 * using the specified {@linkplain java.nio.charset.Charset charset}.  The
			 * length of the new {@code String} is a function of the charset, and hence
			 * may not be equal to the length of the byte array.
			 */
			String s_gbk_dec = new String(s_utf_enc, "GBK");
			System.out.println(s_gbk_dec);

			//��ʼ����ISO����
			String s_iso88591 = new String("��".getBytes("UTF-8"), "ISO8859-1");
			System.out.println(s_iso88591);
			//Ŀ�ĵ���ISO���룬UTF����
			String s_utf8 = new String(s_iso88591.getBytes("ISO8859-1"), "UTF-8");
			System.out.println(s_utf8);
			System.out.println("��");

			System.out.println(Integer.parseInt("")); //异常
		}
		catch(Exception ex){
			ex.printStackTrace();
		}
	}
}
