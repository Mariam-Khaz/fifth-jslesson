const account = {
  accountName: "Mariam",
  balance: 100,
  getBalance() {
    console.log(this.balance);
  },
  deposit() {
    const deposit = parsefloat(prompt("how much to deposit"));
    if (deposit <= 0 || isNaN(deposit)) {
    alert("NOT A VALID AMOUNT")
    }
    this.balance += deposit
    console.log(this.balance)
  },
  withdrawal(){
    let withdrawal = parsefloat(prompt("How much to withrawal?"))
    if (withdrawal <= 0 || isNaN(withdrawal) || withdrawal > this.balance) {
    alert("Not a Valid Amount")
    }
  },
  getAccountName(){
    alert(this.accountName)
  },
  accountError(){
    alert("An error has occured")
    },
}
let loggedIn = true
function atm() {
  while(loggedIn){
    let message = parseFloat(
      prompt(
        "1) Balance, 2) Deposit, 3) Withdrawal, 4) Accountname, 5) Exit."
      )
    );


switch (message) {
    case 1:
      account.getBalance();
      break;
    case 2:
      account.deposit();
      break;
    case 3:
      account.withdrawal();
      break;
    case 4:
      account.getAccountName();
      break;
    case 5:
      loggedIn = false;
      break;
  }
  }
}
atm()
