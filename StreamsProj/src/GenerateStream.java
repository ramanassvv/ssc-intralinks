import java.util.Date;
import java.util.stream.Stream;
public class GenerateStream {
	public static void main(String args[]){
		Stream<Date> stm=Stream.generate(() -> {return new Date(); });
		stm.forEach(p->System.out.println(p));
	}

}
