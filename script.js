
let comida = null;
let bebida = null;
let sobremesa = null;
let nomeComida = "";
let nomeBebida = "";
let nomeSobremesa = "";
let total = "";

//função para selecionar comida, remover selecionado e/ou selecionar outra se necessário
function selecionarPrato(comidaSelecionada) { 
    comidaSelecionadaAntes = document.querySelector(".listaPratos .selecionado");  //Acessa a classe html

    if (comidaSelecionadaAntes !== null){                                          // Verificar se já existe um item pré selicionado
        comidaSelecionadaAntes.classList.remove("selecionado");                    // caso haja, remove-lo
        const iconeAnterior = comidaSelecionadaAntes.querySelector(".checkMark");  //Pegar o icone check da bebida selecionada e desmarcar o item anterior tbm!
        if (iconeAnterior) {
            iconeAnterior.classList.add("desabilitado");                          //adiciona a classe desabilitado o icone anterior
        }
    } 
    comidaSelecionada.classList.add("selecionado");                               //Seleciona novo item
    const iconeAtual = comidaSelecionada.querySelector(".checkMark");             // Pega o Icone check
    if (iconeAtual) {
        iconeAtual.classList.remove("desabilitado");                              //Remove a classe desabilitado
    }
    comida = comidaSelecionada;                                                   // Atribui a variavel local à global
    liberarBotao();                                                               //Chama a função para liberar botão
}

//função para selecionar bebida, remover selecionado e/ou selecionar outra se necessário
function selecionarBebida(bebidaSelecionada) {
    bebidaSelecionadaAntes = document.querySelector(".listaBebidas .selecionado");  //Acessa a classe html

    if (bebidaSelecionadaAntes !== null){                                          // Verificar se já existe um item pré selicionado
        bebidaSelecionadaAntes.classList.remove("selecionado");                    // caso haja, remove-lo
        const iconeAnterior = bebidaSelecionadaAntes.querySelector(".checkMark");  //Pegar o icone check da bebida selecionada e desmarcar o item anterior tbm!
        if (iconeAnterior) {
            iconeAnterior.classList.add("desabilitado");                          //adiciona a classe desabilitado o icone anterior
        }
    }
    bebidaSelecionada.classList.add("selecionado");                               //Seleciona novo item
    const iconeAtual = bebidaSelecionada.querySelector(".checkMark");             // Pega o Icone check
    if (iconeAtual) {
        iconeAtual.classList.remove("desabilitado");                              //Remove a classe desabilitado 
    }
    bebida = bebidaSelecionada;                                                   // Atribui a variavel local à global
    liberarBotao();                                                               //Chama a função para liberar botão
}

//função para selecionar sobremesa, remover selecionado e/ou selecionar outra se necessário
function selecionarSobremesa(sobremesaSelecionada) {
    sobremesaSelecionadaAntes = document.querySelector(".listaSobremesa .selecionado" );//Acessa a classe html

    if (sobremesaSelecionadaAntes !== null){                                          // Verificar se já existe um item pré selicionado
        sobremesaSelecionadaAntes.classList.remove("selecionado");                    // caso haja, remove-lo
        const iconeAnterior = sobremesaSelecionadaAntes.querySelector(".checkMark");  //Pegar o icone check da bebida selecionada e desmarcar o item anterior tbm!
        if (iconeAnterior) {
            iconeAnterior.classList.add("desabilitado"); //                         adiciona a classe desabilitado o icone anterior
        }
    }
    sobremesaSelecionada.classList.add("selecionado");                               //Seleciona novo item
    const iconeAtual = sobremesaSelecionada.querySelector(".checkMark");             // Pega o Icone check
    if (iconeAtual) {
        iconeAtual.classList.remove("desabilitado");                                //Remove a classe desabilitado
    }
    sobremesa = sobremesaSelecionada;                                               // Atribui a variavel local à global
    liberarBotao();                                                                //Chama a função para liberar botão
}

//função para validar o botão
function liberarBotao() {
    const botao = document.querySelector('.pedido button');;
   if (comida && bebida && sobremesa) {
    botao.classList.remove("desligado");
    botao.classList.add("ativo");
    botao.innerHTML = "Fechar pedido";
    botao.onclick = fecharPedido;
    }else {
    botao.classList.remove("ativo");
    botao.classList.add("desligado");
    botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
    botao.onclick = null;
   }
}

//função para clique no botão ao ser liberado
function fecharPedido() {
    const painel = document.querySelector(".painel");
    if (comida && bebida && sobremesa) {
        painel.classList.remove("esconder");
        
        //Buscar os valores em pratos html
        nomeComida = comida.querySelector("h3").innerText;
        const precoComida = comida.querySelector("h5").innerText;

        //Buscar os valores em bebida html
        nomeBebida = bebida.querySelector("h3").innerText;
        const precoBebida = bebida.querySelector("h5").innerText;

        //Buscar os valores em sobremesas html
        nomeSobremesa = sobremesa.querySelector("h3").innerText;
        const precoSobremesa = sobremesa.querySelector("h5").innerText;

        // Atualiza os textos no painel
        document.querySelector(".p-escolhido").innerHTML = `${nomeComida}: ${precoComida}`;
        document.querySelector(".b-escolhido").innerHTML = `${nomeBebida}: ${precoBebida}`;
        document.querySelector(".s-escolhido").innerHTML = `${nomeSobremesa}: ${precoSobremesa}`;

        // Converter os preços de string para número 
        const valorComida = parseFloat(precoComida.replace("R$", "").trim());
        const valorBebida = parseFloat(precoBebida.replace("R$", "").trim());
        const valorSobremesa = parseFloat(precoSobremesa.replace("R$", "").trim());

        total = (valorComida + valorBebida + valorSobremesa).toFixed(2);

        document.querySelector(".p-total").innerHTML = `Total: R$ ${total}`;
    }
}

//criação de função para ir para o whatsApp
function irParaWhatsApp() {
   
    const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomeComida}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${total}`;

    const numero = "5524999999999";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link);
}

//função para canelar e voltar as escolha dos itens
function cancelarConfirmacao() {
    btCancela = document.querySelector(".painel");
    btCancela.classList.add("esconder");

}