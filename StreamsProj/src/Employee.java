import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Stream;

public class Employee {
	
	int rollno;
	String name;
	int age;
	Employee(int rollno, String name, int age){
		//super();
		this.rollno=rollno;
		this.name=name;
		this.age=age;
	}
	public int getId() {
        return rollno;
    }
 
    public void setId(int rollno) {
        this.rollno = rollno;
    }
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public int getAge() {
        return age;
    }
 
    public void setAge(int age) {
        this.age = age;
    }
	public static void main(String args[]){
		
		List<Employee> employees = new ArrayList<Employee>();
		 
		employees.add(new Employee(1, "ramana", 36));
		employees.add(new Employee(2, "syam", 46));
		employees.add(new Employee(3, "venkat", 52));
		 
		Comparator<Employee> comparator = Comparator.comparing(Employee::getAge);
		 
		// Get Min or Max Object
		Employee minObject = employees.stream().min(comparator).get();
		Employee maxObject = employees.stream().max(comparator).get();
		 
		System.out.println("minObject = " + minObject);
		System.out.println("maxObject = " + maxObject);
	
	
		
	}
	@Override
	public String toString() {
		return "Employee [rollno=" + rollno + ", name=" + name + ", age=" + age + "]";
	}
	

}
