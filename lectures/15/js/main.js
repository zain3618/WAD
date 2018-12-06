var account = {
    title: "Syed Zain Bukhari",
    balance: 900000,
    currency: "PKR",
    iban: 90078601
};

var withdrawAmount;
var depositAmount;

function DisplayInfo() {

    var title = document.getElementById("title");
    var balance = document.getElementById("balance");
    var currency = document.getElementById("currency");
    var iban = document.getElementById("IBAN");


    title.innerText = account.title;
    balance.innerText = account.balance;
    currency.innerText = account.currency;
    iban.innerText = account.iban;

}

DisplayInfo();

function Action(K) {

    depositAmount = document.getElementById("deposit").value;
    withdrawAmount = document.getElementById("withdraw").value;

    var depMsg = document.getElementById("deposit-msg");
    var credMsg = document.getElementById("withdraw-msg");
    
    if(K.keyCode == '13')
        if()
        {
            Withdraw();
        }
        else if()
        {
            Deposit();
        }
        else{
            credMsg.innerText = "Invalid Info";
            credMsg.color = "red";
        }
}

Action();

function Withdraw () {

    var msg = document.getElementById("withdraw-msg");

    if(withdrawAmount <= account.balance ) {
        account.balance = account.balance - withdrawAmount;
        DisplayInfo();
    }
    else
    {
        msg.innerText = "Insufficient Amount!";
        msg.color = "red";
    }
}

function Deposit() {
    account.balance = account.balance + depositAmount;
    DisplayInfo();
}