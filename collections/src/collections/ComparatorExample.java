package collections;

import java.util.*;

public class ComparatorExample implements Comparator<ComparatorExample> {
	
	int rollno;
	String name;
	int age;

	ComparatorExample(int rollno,String name,int Age)
	{
		this.rollno=rollno;
		this.name=name;
		this.age=Age;
	}
	
	ComparatorExample(){}
	
	@Override
	public String toString() {
		return "ExComparator [rollno=" + rollno + ", name=" + name + ", age=" + age + "]";
	}
	
	
	public static <E> void main(String args[]){
		ArrayList<ComparatorExample> s=new ArrayList<ComparatorExample>();
		s.add(new ComparatorExample(123,"ramana",22));
		s.add(new ComparatorExample(345,"soniya",23));
		s.add(new ComparatorExample(567,"madhesh",22));
		s.add(new ComparatorExample(789,"raji",24));
		
		Collections.sort(s, new ComparatorExample());
		
		for(ComparatorExample a : s)
		{
			System.out.println(a);
		}

	}

	@Override
	public int compare(ComparatorExample o1, ComparatorExample o2) {
		
		if(o1.age == o2.age)
			return 0;
		if(o1.age > o2.age)
			return 1;
		
		return -1;
	}


}
