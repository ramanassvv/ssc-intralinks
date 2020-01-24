import java.util.*;
public class Example1 {
	public static  <T> void main(String args[]){
		ArrayList<T> s=new ArrayList<T>();
		s.add((T) "ramana");
		//s.add(123,null);
		System.out.print(s);
	}
}
