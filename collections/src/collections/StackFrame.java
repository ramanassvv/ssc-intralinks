package collections;

import java.util.*;  

class StackFrame{  
public static void main(String args[]){  
Stack<String> s=new Stack<String>();//Creating arraylist  
	s.push("ramana");
	s.push("rahul");
	s.push("venkat");
	s.push("123");
	s.push("syam");
	Stack<String> s1=new Stack<String>();
	s1.push(s.pop());

	System.out.print(s1);
//Traversing list through Iterator  
	Iterator<String> itr=s.iterator();
	while(itr.hasNext()){  
		System.out.println(itr.next());  
		}  
	}  
	

	
}