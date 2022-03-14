const loginBtn = document.getElementById('login');
// console.log(loginBtn);

loginBtn.addEventListener('click',function(){
    // click to hide login area
    const loginArea = document.getElementById('login-area');
    loginArea.style.display='none';
    
    // displaying transaction area
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display='block';
})

// deposit btn event handler //

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount); 

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('depositAmount').value='';

    const newBalance = document.getElementById('newBalance').innerText;
    newBalanceNumber = parseFloat(newBalance);
    const totalBalance = newBalanceNumber + totalDeposit; 

    document.getElementById('newBalance').innerText = totalBalance;
})
// withdraw btn event handler

const withdrawBtn = document.getElementById('withdrawBtn'); 

withdrawBtn.addEventListener('click', function(){
    const WithdrawAmount =document.getElementById('withdrawAmount').value;
    const withdrawNumeber = parseFloat(WithdrawAmount);
    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    
    const totalWithdraw = currentWithdrawNumber + withdrawNumeber;
    document.getElementById('currentWithdraw').innerText = totalWithdraw ;

    document.getElementById('withdrawAmount').value ='';


    const newBalance = document.getElementById('newBalance').innerText;
    newBalanceNumber = parseFloat(newBalance);

    const balanceNow = newBalanceNumber - totalWithdraw;

    document.getElementById('newBalance').innerText = balanceNow; 

    // const balance = newBalanceNumber - 


  
})

