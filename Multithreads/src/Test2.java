class Test2 extends Thread{
	public void run(){
		for(int i=0;i<10;i++){
			
			try{
				Thread.sleep(100);
			}
			catch(InterruptedException e){
				System.out.println(e);
			}
			System.out.println(i);
		}
	}
	public static void main(String args[]){
		Test2 t1=new Test2();
		Test2 t2=new Test2();
		t1.run();
		t2.run();
	}
}

