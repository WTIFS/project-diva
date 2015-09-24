package myPlayGround;

public class ClassInherit {

	
	static class B{
		static int n = 10;
		static {System.out.println("B init");}
		/*public B(){
			System.out.println("B init");
		}*/
	}
	
	static class A extends B{
		static {System.out.println("B init");}
		/*public A(){
			System.out.println("A init");
		}*/
	}
	
	static class C{
		static int n = 20;
		public C(){
			System.out.println("C init");
		}
	}
	
	static class D extends C{
		public D(){
			System.out.println("D init");
		}
	}
	
	public static void main(String[] args){
		//B b = new B();
		//A a = new A();
		System.out.println(A.n);
		D d = new D();
		C c = new D();
	}
}
