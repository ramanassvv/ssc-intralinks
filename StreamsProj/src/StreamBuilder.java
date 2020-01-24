import java.util.stream.Stream;;

// print the elements 

public class StreamBuilder {
	public static void main(String args[]){
		Stream<Integer> s=Stream.of(1,2,3,4,5);
		s.forEach(i->System.out.print(i));
	}
}




