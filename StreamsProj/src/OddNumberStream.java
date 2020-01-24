import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;;

public class OddNumberStream {
	public static void main(String args[]){
		List<Integer> list=new ArrayList<Integer>();
		Stream<Integer> stream=list.stream();
		for (int i=0;i<10;i++){
			list.add(i);
		}
		
		Set<Integer> strm=stream.filter(i->i%2==1).collect(Collectors.toSet());
		System.out.println(strm);
	}
}
