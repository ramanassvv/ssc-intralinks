package collections;

import java.util.Iterator;
import java.util.PriorityQueue;


public class Pq {
	public static void main(String args[]){
		PriorityQueue<String> queue=new PriorityQueue<String>();  
		queue.add("Amit Sharma");  
		queue.add("Bijay Raj");  
		queue.add("1aiShankar");  
		queue.add("Daj");  
//		System.out.println("head:"+queue.element());  
//		System.out.println("head:"+queue.peek());  
//		System.out.println("iterating the queue elements:");
//		
		Iterator<String> itr=queue.iterator(); 
		while(itr.hasNext()){  
			System.out.println(itr.next());  
		}  
		queue.remove();  
		queue.poll();  
		
		System.out.println("*********************************");
		System.out.println("after removing two elements:");  
		Iterator<String> itr2=queue.iterator();  
		while(itr2.hasNext()){  
		System.out.println(itr2.next());  
		}  
		
	}

}
