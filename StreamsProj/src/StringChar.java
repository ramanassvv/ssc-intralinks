import java.util.Comparator;
import java.util.stream.Stream;
public class StringChar {
	public static void main(String args[]){
		String maxchar=Stream.of("A","r","b","a","]")
						.max(Comparator.comparing(String::valueOf))
						.get();
		System.out.println("MaxCharacter:::::"+maxchar);
		
		//minimum character
		String minchar=Stream.of("A","r","b","a","]")
				.min(Comparator.comparing(String::valueOf))
				.get();
		System.out.println("MinimumCharacter:::::"+minchar);
		
	}

}
