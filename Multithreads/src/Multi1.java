import java.util.*;
class Multi1 implements Runnable {

	public void run(){
		System.out.println("thread is running");
	}

public static void main(String[] args) {
	Multi1 m1=new Multi1();
	Thread t1=new Thread(m1);
	Thread t2=new Thread(m1);
	t1.start();
	t2.start();
}
}