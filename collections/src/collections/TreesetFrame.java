package collections;
 import java.util.*;
 
public class TreesetFrame{
	public static void main(String args[]){
	TreeSet<String> set=new TreeSet<String>();
		set.add("<><>");
		set.add("ramana");
		set.add("123");
		set.add("intralinks");
		set.add("Ravi");  
		set.add("Vijay");  
		set.add("Ravi");  
		set.add("Ajay");
		Iterator<String> itr=set.iterator();
		while(itr.hasNext()){
			System.out.println(itr.next());
		}
		
	}
}