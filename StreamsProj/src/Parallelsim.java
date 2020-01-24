import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import java.lang.Integer;


public class Parallelsim {
	public static void main (String args[]){
		List<Integer> list1=new ArrayList<Integer>();
		for (int i=1;i<=10;i++){
			list1.add(i);
		}
		
		//Creating parallel Stream
		Stream<Integer> stm=list1.parallelStream();
		Integer[] evenNumbers=stm.filter(i->i%2==1)
									.toArray(Integer[]::new);
		//System.out.println(evenNumbers);
		Stream.of(evenNumbers).forEach(System.out::println);
		
	}
	  
}
