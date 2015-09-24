package myPlayGround;

public class AnimalCat implements AnimalInterface{
	private String name;
	
	public AnimalCat(String namae){
		setName(namae);
	}
	
	@Override
	public String sayName(){
		System.out.println(name);
		return name;
	}
	public void setName(String namae){
		name = namae;
	}
	public String getName(){
		return name;
	}
}
