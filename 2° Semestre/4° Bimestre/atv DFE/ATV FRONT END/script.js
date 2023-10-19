//Alterar cor do fundo
//Se no select acontecer um "change", a função pegará o id desse "change" ocorrido e executará a função.
document.getElementById('cores').addEventListener('change', function(){
    var selecionarcor = this.value; //Pega o valor selecionado
    var div = document.getElementById('divMudarCor'); //Define a div
    div.style.backgroundColor = selecionarcor; //Define a cor de fundo da div
});

//Incrementar e Decrementar par impar colorido
let numero = 0;
let numSpan = document.getElementById('num');

function incrementarNum(){
    numero++;
    numSpan.textContent = numero
    mudarCor()
}
function decrementarNum(){
    numero--;
    numSpan.textContent = numero;
    mudarCor()
}
function mudarCor(){
    if(numero === 0){
        numSpan.style.color="black"
    }
    else if(numero % 2===0){
        numSpan.style.color="blue";
    }
    else{
        numSpan.style.color="green";
    }
}

document.getElementById('incrementar').addEventListener('click', incrementarNum);
document.getElementById('decrementar').addEventListener('click', decrementarNum);


///Cronometro///
let minutos = 0;
let segundos = 0;
let cronometro;
let emExecucao = false;

//Formatar o tempo "minutos:segundos"
function formatarTempo(){
    let minutosStr = minutos < 10 ? `0${minutos}` : minutos;
    let segundosStr = segundos < 10 ? `0${segundos}` : segundos;
    return `${minutosStr}:${segundosStr}`;
}

//Atualizar e Exibir Cronômetro
function atualizarTempo(){
    document.getElementById('tempo').textContent = formatarTempo();
}

//Iniciar o cronômetro
function iniciarTempo(){
    if(!emExecucao){
        emExecucao = true;
        cronometro = setInterval(function(){
            segundos++;
            if(segundos === 60){
                segundos = 0;
                minutos++;
            }
            atualizarTempo();
        }, 1000);
    }
}
//Zerar Cronômetro
function zerarTempo(){
    emExecucao = false;
    clearInterval(cronometro);
    minutos = 0;
    segundos = 0;
    atualizarTempo();
}
//Pausar Cronômetro
function pausarTempo(){
    if(emExecucao){
        emExecucao = false;
        clearInterval(cronometro);
    }
}

//Formulario//
function validarCampo(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const celular = document.getElementById('celular').value;
    let mensagemErro = "";

    //Validar Nome Completo
    const nomes = nome.split(" ");
    if(nomes.length <2){
        mensagemErro += "Nome Completo deve conter no mínimo 2 nomes.\n";
    }
    //Validar Email
    if(!email.includes("@")){
        mensagemErro += 'Email deve conter "@".\n';
    }
    //Validar CPF
    if(cpf.length !== 11){
        mensagemErro += "CPF deve conter 11 caracteres.\n";
    }
    //Validar Celular
    if(celular.length < 8 || celular.length > 9){
        mensagemErro += "Celular deve conter no mínimo 8 e no máximo 9 caracteres.\n"
    }

    //Exibe mensagem de erro
    if(mensagemErro){
        alert("Erro de validação:\n" + mensagemErro);
    } else{
        alert("Campos validados com sucesso.")
    }
    
}