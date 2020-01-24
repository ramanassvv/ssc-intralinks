package collections;

import java.util.ArrayDeque;
import java.util.Deque;

public class DequeFrame {
	public static void main(String args[]){
		Deque<String> dq=new ArrayDeque<String>();
		dq.add("ramana \n");
		dq.add("123");
		for(String str:dq){
			System.out.print(str);
		}
		
		
 		
	}
}
