 import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
 
public class TerminalFunctions {
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
		
		List<String> names1=names.stream().sorted()
							.map(String::toUpperCase)
							.collect(Collectors.toList());
		System.out.println(names1);
		
		
	}
}
