import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class EvenNumberStream {
	public static void main(String args[]){
		List<Integer> list=new ArrayList<Integer>();
		for(int i=0;i<10;i++){
			list.add(i);
		}
		Stream<Integer> stream=list.stream();
		//list printed in stream
		//stream.forEach(i->System.out.print(i));
		List<Integer> evenNumbersList = stream.filter(i -> i%2 == 0).collect(Collectors.toList());
		System.out.print(evenNumbersList);
	}

	
}
