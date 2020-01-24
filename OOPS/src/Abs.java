abstract class Car{
	Car(){
		System.out.println("I am ready");
	}
	

abstract void drive();
void gearChange(){
	System.out.println("GearChanged!");
}
}
class  Car2 extends Car{
	void drive(){
		System.out.println("Drive safely");
	}
}
class Abs {
	public static void main(String args[]){
		Car obj=new Car2();
		obj.drive();
		obj.gearChange();
	}

}
