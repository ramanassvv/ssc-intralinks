package collections;

import java.util.Hashtable;
import java.util.Map.Entry;

public class Maps {
	public static void main(String args[]){
		Hashtable<Integer,String> hm=new Hashtable<Integer,String>();
		hm.put(100,"ramana");
		hm.put(105, "syam");
		hm.put(103,"venkat");
		hm.put(104, "rahul");
		
		//System.out.println("elements"+hm);
		for(Entry<Integer, String> m:hm.entrySet()){  
			   System.out.println(m.getKey()+" "+m.getValue());  
			  }  
		
			
	}
}
