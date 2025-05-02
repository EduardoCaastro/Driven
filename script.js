
let comida = null;
let bebida = null;
let sobremesa = null;

function selecionarPrato(comidaSelecionada) { 
    comidaSelecionadaAntes = document.querySelector(".listaPratos .selecionado");

    if (comidaSelecionadaAntes !== null){
        comidaSelecionadaAntes.classList.remove("selecionado");
        const iconeAnterior = comidaSelecionadaAntes.querySelector(".checkMark");
        if (iconeAnterior) {
            iconeAnterior.classList.add("desabilitado");
        }
    } 
    comidaSelecionada.classList.add("selecionado");
    const iconeAtual = comidaSelecionada.querySelector(".checkMark");
    if (iconeAtual) {
        iconeAtual.classList.remove("desabilitado");
    }
    comida = comidaSelecionada;
    liberarBotao();   
}

function selecionarBebida(bebidaSelecionada) {
    bebidaSelecionadaAntes = document.querySelector(".listaBebidas .selecionado");

    if (bebidaSelecionadaAntes !== null){
        bebidaSelecionadaAntes.classList.remove("selecionado");
        const iconeAnterior = bebidaSelecionadaAntes.querySelector(".checkMark");
        if (iconeAnterior) {
            iconeAnterior.classList.add("desabilitado");
        }
    }
    bebidaSelecionada.classList.add("selecionado");
    const iconeAtual = bebidaSelecionada.querySelector(".checkMark");
    if (iconeAtual) {
        iconeAtual.classList.remove("desabilitado");
    }
    bebida = bebidaSelecionada;
    liberarBotao();
}

function selecionarSobremesa(sobremesaSelecionada) {
    sobremesaSelecionadaAntes = document.querySelector(".listaSobremesa .selecionado");

    if (sobremesaSelecionadaAntes !== null){
        sobremesaSelecionadaAntes.classList.remove("selecionado");
        const iconeAnterior = sobremesaSelecionadaAntes.querySelector(".checkMark");
        if (iconeAnterior) {
            iconeAnterior.classList.add("desabilitado");
        }
    }
    sobremesaSelecionada.classList.add("selecionado");
    const iconeAtual = sobremesaSelecionada.querySelector(".checkMark");
    if (iconeAtual) {
        iconeAtual.classList.remove("desabilitado");
    }
    sobremesa = sobremesaSelecionada;
    liberarBotao();
}


function liberarBotao() {
    const botao = document.querySelector('.pedido button');
   if (comida && bebida && sobremesa) {
    botao.classList.remove("desligado");
    botao.classList.add("ativo");
    botao.innerHTML = "Fechar pedido";
    }else{
        botao.classList.remove("ativo");
        botao.classList.add("desligado");
    }
}

function fecharPedido() {
    const painel = document.querySelector(".fundo");
    if (comida && bebida && sobremesa) {
    painel.classList.remove("esconder");
    }
}