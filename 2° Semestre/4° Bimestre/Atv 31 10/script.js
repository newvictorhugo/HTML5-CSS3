function validar(){
    var nome = document.querySelector('#nome')
    var email = document.querySelector('#email')
    var password = document.querySelector('#password')
    var errorMessage = document.getElementById('errorMessage')

    nome.setAttribute('placeholder', '');
    email.setAttribute('placeholder', '');
    password.setAttribute('placeholder', '');

    var correto = true;

    var validarEmail = new RegExp(/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/);
    var testEmail = validarEmail.test(email.value);
    
    if(nome.value === ''){
        nome.value = '';
        nome.setAttribute('placeholder', 'Insira seu nome!!');
        nome.style.border = "solid 2px red";
        correto = false;
    } else{
        nome.style.border = "none";
    }

    if(!testEmail){
        email.value = '';
        email.setAttribute('placeholder', 'Esse E-MAIL não é válido!!');
        email.style.border = "solid 2px red";
        correto = false;
    } else{
        email.style.border = "none";
    }

    if(password.value === ''){
        password.value = '';
        password.setAttribute('placeholder', 'Insira uma senha!!');
        password.style.border = "solid 2px red";
        correto = false;
    } else{
        password.style.border = "none";
    }

    if(correto){
        alert("Login bem-sucedido!!");
        nome.value = '';
        email.value = '';
        password.value = '';
        errorMessage.textContent = '';
    }else{
        errorMessage.textContent = "Credenciais inválidas. Tente novamente."
    }
    
}