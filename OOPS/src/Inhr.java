class Animal{
	void eat(){
		System.out.println("I am omnivorous");
	}
	
}
class Mammal extends Animal{
	void nature(){
		System.out.println("I am  mammal");
	}
}

class Dog extends Mammal{
	void sound(){
		System.out.println("I bark");

	}
}

class Inhr {
	public static void main(String args[]){
		Dog d=new Dog();
		d.eat();
		d.nature();
		d.sound();
	}
}
