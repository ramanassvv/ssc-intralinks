import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class Listadd {
	public static void main(String args[]){
		List<String> names=new ArrayList<String>();
		names.add("ramana");
		names.add("sita");
		names.add("ashok");
		names.add("raju");
		names.add("raji");
		names.add("jani");
		names.add("soniya");
		names.add("madhesh");
		names.add("vijay");
		names.add("ravana");
		
		//map function

//		names.stream().filter((s)->s.startsWith("r"))
//					.map(String::toUpperCase)
//					.forEach(System.out::println);	
//		
		//sorting 
		names.stream().sorted()
					.map(String::toUpperCase)
					.forEach(System.out::println);
		
		
	}
	
}
