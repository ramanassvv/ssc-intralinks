import java.util.Comparator;
import java.util.stream.Stream;

public class MaxNumbers {
	public static void main(String args[]){
		//display maximum number
		Integer maxnumbers=Stream.of(1,2,3,4,5,7,8,9)
							.max(Comparator.comparing(Integer::valueOf))
							.get();
		System.out.println("maxnumber:"+maxnumbers);
		
		//display minimum number
		Integer minnumbers=Stream.of(1,2,3,4,5,7,8,9)
				.min(Comparator.comparing(Integer::valueOf))
				.get();
		
		System.out.println("minumber:"+minnumbers);

	}
}
