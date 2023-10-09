//Leitura nota
function calcularMedia(nota1, nota2) {
    return ((nota1 * 4) + (nota2 * 6)) / 10;
}

function calcularSituacao(media, faltas) {
    return (media >= 6.0 && faltas <= 16) ? 'Aprovado' : 'Reprovado';
}

function calcularMediaESituacao(event) {
    event.preventDefault();

    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var faltas = parseInt(document.getElementById('faltas').value);

    var media = calcularMedia(nota1, nota2);
    var situacao = calcularSituacao(media, faltas);

    document.getElementById('media').textContent = media
    document.getElementById('situacao').textContent = situacao;

    document.getElementById('resultado').style.display = 'block';
}

//Venda de veículo
function calcularPrecoVenda(event) {
    event.preventDefault();

    var modelo = document.getElementById('modelo').value;
    var marca = document.getElementById('marca').value;
    var custoFabricacao = parseFloat(document.getElementById('custoFabricacao').value);

    // Calcula o preço de venda com acréscimo de 30%
    var precoVenda = custoFabricacao * 1.3;

    document.getElementById('precoVenda').textContent = precoVenda.toFixed(2);
    document.getElementById('resultado1').style.display = 'block';
}
//Ordenar Numero
function ordenarNumeros(event) {
    event.preventDefault();

    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var numero3 = parseInt(document.getElementById('numero3').value);

    // Ordena os números em ordem crescente
    var numerosOrdenados = [numero1, numero2, numero3].sort(function(a, b) {
        return a - b;
    });

    document.getElementById('numeroOrdenado1').textContent = numerosOrdenados[0];
    document.getElementById('numeroOrdenado2').textContent = numerosOrdenados[1];
    document.getElementById('numeroOrdenado3').textContent = numerosOrdenados[2];

    document.getElementById('resultado2').style.display = 'block';
}

