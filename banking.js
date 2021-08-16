// Banking Dashboard Calculation

function inputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputText = inputFeild.value;
    const inputAmmount = parseFloat(inputText);
    inputFeild.value = '';
    return inputAmmount
}
function updateFeild(updateFeildId, ammount) {
    const feildElement = document.getElementById(updateFeildId);
    const feildText = feildElement.innerText;
    const feildAmmount = parseFloat(feildText);
    feildElement.innerText = feildAmmount + ammount;
}
function currentTotalBallance() {
    const balanceTotal = document.getElementById('balance-ammount');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);
    return balanceTotalAmmount;
}

function updateTotalBallace(ammount, isAdd) {
    const balanceTotal = document.getElementById('balance-ammount');
    const previousBallance = currentTotalBallance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBallance + ammount;
    }
    else {
        balanceTotal.innerText = previousBallance - ammount;
    }
}

// Deposit 
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depostiAmmount = inputValue('deposit-input')
    if (depostiAmmount > 0) {
        updateFeild('deposit-ammount', depostiAmmount)
        updateTotalBallace(depostiAmmount, true)
    }
})

// Withdrow

document.getElementById('withdrow-btn').addEventListener('click', function () {

    const withdrowAmmount = inputValue('withdrow-input');
    const currentBallance = currentTotalBallance();
    if (withdrowAmmount > 0 && withdrowAmmount < currentBallance) {
        updateFeild('withdrow-ammount', withdrowAmmount)
        updateTotalBallace(withdrowAmmount, false)
    }

})


