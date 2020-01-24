import java.util.Scanner;

class Bank implements Accounts{
	public int cus_accno;
	public String cus_name;
	public int balance;
	public int prev_balance;
	public int d_limit,w_limit,t_limit;
	

	public Bank(int cus_accno, String cus_name,int d_limit,int w_limit,int t_limit) {
		this.cus_accno=cus_accno;
		this.cus_name=cus_name;
		this.d_limit=d_limit;
		this.w_limit=w_limit;
		this.t_limit=t_limit;
		// TODO Auto-generated constructor stub
	}
	//show balance method
	@Override
	public void showbalance(){
		
		System.out.print("Balance:"+balance);

	}
	//deposit method
	@Override
	public void deposit(int amount){
		if(amount>=0 && amount<=d_limit){
			
			balance=balance+amount;
			prev_balance=balance;
		}
		else{
			
			System.out.println("you are exceeded deposit limit of:20000");
		
		}
	}
	//withdraw method
	@Override
	public void withdraw(int amount1){
		if(balance>amount1 && amount1<w_limit)
		{
			balance=balance-amount1;
			//prev_balance-=amount1;
		}
		else{
			System.out.print("you are exceeded withdrawlimit of:10000");
		}
	}
	@Override
	public void getPrevTran(){
		
		if(prev_balance>=0){
			System.out.print(prev_balance);
		}
		else if(prev_balance<=0){
			System.out.print("withdraw: "+Math.abs(prev_balance));
		}
		else{
			System.out.print("no transaction is occured");
		}
	}
	void showmenu(){
		
		System.out.println("**************Welcome**************");
		//System.out.println("Your account NUmber :"+ cus_accno);
		//System.out.println("Your account name:"+ cus_name);
		//System.out.print("\n");
		System.out.print("1:Check balance\n");
		System.out.print("2:Deposit\n");
		System.out.print("3:Withdraw\n");
		System.out.print("4:previous transaction\n");
		System.out.print("5:exit\n");
		
		System.out.println("Choose your option:");
		Scanner s=new Scanner(System.in);
		int  n1=s.nextInt();
		do{
			
			switch(n1){
				case 1:
					showbalance();
					break;
				case 2:
					System.out.println("Enter the Deposit ammount:");
					int amount=s.nextInt();
					deposit(amount);
					break;
				case 3:
					System.out.println("Enter the Withdraw ammount:");
					int amount1=s.nextInt();
					withdraw(amount1);
					break;
				case 4:
					System.out.print("Your Previous Transaction:");
					getPrevTran();
					break;
				
			}
			System.out.print("\n");
			System.out.print("1:Check balane\n");
			System.out.print("2:Deposit\n");
			System.out.print("3:Withdraw\n");
			System.out.print("4:previous transaction\n");
			System.out.print("5:exit\n");
			n1=s.nextInt();
		}
		while(n1!= 5);
			System.out.print("Thank you! Visit Again");
	}
		public static void main(String args[]){
		//Bank obj1=new Bank(123,"ramana",20000,10000,15000);
		Bank obj2=new Bank(118,"raji",20000,10000,25000);
		//obj1.showmenu();
		obj2.showmenu();
	}
}

	
	
	