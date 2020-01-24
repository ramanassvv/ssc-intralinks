
public class Ployms {
	public int sum(int x,int y){
		return (x+y);
	}
	public int sum(int x,int y,int z){
		return(x+y+z);
	}
	public double sum (double x,double y){
		return (x+y);
		
	}
	public static void main(String args[]){
			Ployms s=new Ployms();
			System.out.println(s.sum(5,10));
			System.out.println(s.sum(5,10,5));
			System.out.println(s.sum(5,10));
			
			
	}
}
