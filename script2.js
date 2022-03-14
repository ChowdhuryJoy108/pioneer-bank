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

    const currentBalance = document.getElementById('currentBalance').innerText;

)}






