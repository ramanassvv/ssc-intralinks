import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Matching {
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
		
		// dispaly the boolean values
		
//		boolean names1=names.stream().sorted()
//							.anyMatch((s)->s.startsWith("a"));
//		System.out.println(names1);
		
		//display the boolean value
//		boolean names1=names.stream().sorted()
//				.allMatch((s)->s.startsWith("a"));
//		System.out.println(names1);

		
//		boolean names1=names.stream().sorted()
//				.equals(("a"));
//		System.out.println(names1);
	
		
		//count the names  starts with r
		long names1=names.stream()
				.filter((s)->s.startsWith("r"))
				.count();
		System.out.println(names1);
		
		
	}
}
