import java.util.*;

public class BankApp implements Account{
	public int accno;
	public String accname;
	public int amount;
	 
	//variables for limits
	public int d_limit=20000;
	public int w_limit=20000;
	public int tr_limit=20000;
	@Override
	public void getBalance() {
		// TODO Auto-generated method stub
		System.out.print("Balance:"+amount);
	}
	@Override
	public void deposit(int amount) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void withdraw(int amount) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void transfer(int amount) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void preTran() {
		// TODO Auto-generated method stub
		
	}
	public static void main(String args[]){
		
	}
	
	
}


