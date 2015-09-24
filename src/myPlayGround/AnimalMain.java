package myPlayGround;

public class AnimalMain {
	
	public static void yoo(AnimalInterface ai){
		ai.sayName();
	}
	
	public static void main(String[] args){
		AnimalCat cat = new AnimalCat("Kitty");
		yoo(cat);
		AnimalInterface aiCat = new AnimalCat("Doggy");
		aiCat.sayName();
	}
}
