package collections;

import java.util.ArrayList;
import java.util.Collections;

public class CollectionsPractise {

	public static void main(String[] args) {
		
		ArrayList<Integer> list = new ArrayList<>();
		
		list.add(1);
		list.add(4);
		list.add(5);
		list.add(6);
		list.add(3);
		
		Collections.sort(list);
		
		System.out.print(Collections.binarySearch(list,3));
	}

}
