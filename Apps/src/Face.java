import java.util.*;
public class Face {
		void fact(int n){
			int fact=1;
			for (int i=1;i<=n;i++){
				
				fact=fact*i;
			}
			System.out.print(fact);
		}
		
public static void main(String args[]){
	new Face().fact(5);
}
}
