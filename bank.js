let submitButton = document.getElementById('login-button').addEventListener('click', function(){
    let userEmail = document.getElementById('email-fild').value ;
    let userPassword = document.getElementById('password-fild').value ;
    if(userEmail == 'riyad@gmail.com' && userPassword == 'riyad'){
        window.location.href = 'banking.html'
    }else {
        let worningMsg = document.createElement('p');
        worningMsg.innerText = 'Please Enter your valid email (riyad@gmail.com) and password (riyad)'
        worningMsg.style.color = 'red'

        document.getElementById('worning-msg').appendChild(worningMsg);
    }
});

