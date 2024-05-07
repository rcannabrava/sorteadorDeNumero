function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    let diferencaDeAte = ate - de;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        if (diferencaDeAte < quantidade) {
            alert("A quantidade de números deverá ser menor que a diferença entre os dois campos abaixo");
            break;
        }

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    if (de >= ate) {
        alert("O número escolhido no camopo 'Do número', deverá ser menor do que o número escolhido no campo 'Até o número'!")
    }

    let resultado = document.getElementById('resultado');
    let palavraSorteado = quantidade > 1 ? 'Números sorteados: ' : 'Número sorteado: '

    if (quantidade != 1) {
        resultado.innerHTML= `<label class="texto__paragrafo">${palavraSorteado} ${sorteados}</label>`;
    } else {
        resultado.innerHTML= `<label class="texto__paragrafo"> ${palavraSorteado} ${sorteados}</label>`;
    }

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max -  min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}