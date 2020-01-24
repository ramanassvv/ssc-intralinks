package collections;
 import java.util.*;
 
public class HashSetFrame {
	public static void main(String args[]){
		
		HashSet<String> set=new HashSet<String>();
//		set.add("ramana");
//		set.add("intralinks");
		set.add("Ravi");  
		set.add("Vijay");  
		set.add("Rama");  
		set.add("Ajay");
		Iterator<String> itr=set.iterator();
		while(itr.hasNext()){
			System.out.println(itr.next());
		}
		
	}
}