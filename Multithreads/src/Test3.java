import java.util.*;
class Test3 extends Thread{
	public void run(){
		for(int i=1;i<=5;i++){
			
			try{
				Thread.sleep(500);
			}
			catch(InterruptedException e){
				System.out.println(e);
			}
			System.out.println(i);
		}
	}
	public static void main(String args[]){
		Test3 t1=new Test3();
		Test3 t2=new Test3();
		Test3 t3=new Test3();
		t1.start();
		try{
			t1.join(1500);
		}
		catch(Exception e){
			System.out.println(e);
		}
		t2.start();
		t3.start();
	}
}

