// Log in Form 
document.getElementById('login-btn').addEventListener('click', function () {
    let accountNumber = document.getElementById('account-number').value;
    let accountPassword = document.getElementById('account-password').value;
    if (accountNumber == '0012345678910' && accountPassword == 'amarbank') {
        window.location.href = 'banking.html'
    }
    else {
        alert("Account Don't Match");

    }
    accountNumber.value = ' ';
    accountPassword.value = ' ';

})
