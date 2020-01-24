import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class ListStreamEle {
	
	public static void main(String args[]){
		
		List<Integer> str1=new ArrayList<Integer>();
		
		for(int i=0;i<=10;i++){
			str1.add(i);
		}
		Stream<Integer> stm=str1.stream();
		stm.forEach(p->System.out.println(p));
	}

}
