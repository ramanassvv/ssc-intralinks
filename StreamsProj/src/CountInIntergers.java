import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class CountInIntergers {
public static void main(String args[]){
		
		List<Integer> names=new ArrayList<Integer>();
		names.add(1);
		names.add(2);
		names.add(3);
		// display the boolean values
		
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
				.count();
		System.out.println(names1);
		
		
	}
}
