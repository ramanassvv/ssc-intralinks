
import java.util.stream.Stream;
public class DateStream {
	
		public static void main(String args[]){
		Stream<Integer> s=Stream.of(new Integer[]{4,5,3,2,1,6,4,5,1,1,8}).distinct().sorted();
		s.forEach(i->System.out.print(i));

		}

	}
