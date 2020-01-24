package collections;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;
import java.util.PriorityQueue;

public class Arrqueue {
	

	public static void main(String args[]){
		Deque<String> queue=new ArrayDeque<String>();  
		queue.add("Amit Sharma");  
		queue.add("Vijay Raj");  
		queue.add("JaiShankar");  
		queue.add("Raj");  
		for(String str:queue){
			System.out.println(str);
		}
		
	}
}
