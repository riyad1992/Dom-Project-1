document.getElementById('deposit-button').addEventListener('click', function(){
    let depositText = document.getElementById('deposit-input').value;
    let newDepositAmount = parseFloat(depositText);

    let depositTotal = document.getElementById('total-deposit');
    let prevasDepositAmount = parseFloat(depositTotal.innerText)
    depositTotal.innerText = newDepositAmount + prevasDepositAmount;

    let balanceTotalText = document.getElementById('balance-total');
    let balanceTotal = parseFloat(balanceTotalText.innerText);
    balanceTotalText.innerText = balanceTotal + newDepositAmount;


    document.getElementById('deposit-input').value = '';
})


document.getElementById('withdraw-button').addEventListener('click', function(){
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawInputText = withdrawInput.value;
    let withdrawInputAmount = parseFloat(withdrawInputText);

    let totalWithdraw = document.getElementById('total-withdraw');
    let totalWithdrawAmount = parseFloat(totalWithdraw.innerText)
    totalWithdraw.innerText = withdrawInputAmount + totalWithdrawAmount;

    let balanceTotalText = document.getElementById('balance-total');
    let balanceTotal = parseFloat(balanceTotalText.innerText);
    balanceTotalText.innerText = balanceTotal - withdrawInputAmount;

    withdrawInput.value = '';
})


document.getElementById('logout-button').addEventListener('click', function(){
    window.location.href = 'index.html'
})