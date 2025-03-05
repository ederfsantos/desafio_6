/*declaração das listas(arrays)*/
let listaDeFrutas = [];
let listaDeLaticinios = [];
let listaDeCongelados = [];
let listaDeDoces = [];
let listaDeBebidas = [];
let resposta;
let resposta2;


do {
    resposta = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou Nao");
    resposta = resposta.toUpperCase();//deixando tudo maiusculo para comparação, caso usuario digite minusculo

    if (resposta == "SIM") {
        let comida = prompt("Qual comida você deseja inserir?");
        let categoria = parseInt(prompt("Em qual categoria essa comida se encaixa?\nEscolha uma opção:\n[1] Frutas, [2] Laticínios," +
            " [3] Congelados, [4] Doces, [5] Bebidas"));

        if (categoria == 1) {
            listaDeFrutas.push(comida);
        }
        if (categoria == 2) {
            listaDeLaticinios.push(comida);

        }
        if (categoria == 3) {
            listaDeCongelados.push(comida);

        }
        if (categoria == 4) {
            listaDeDoces.push(comida);

        }
        if (categoria == 5) {
            listaDeBebidas.push(comida);

        }
    }
    resposta2 = prompt("Você deseja remover algum item da lista? Sim ou Nao");
    resposta2 = resposta2.toUpperCase();
    if (resposta2 == "SIM") {
        let item = prompt("Sua Lista de compras!\nDoces: " + listaDeDoces + "\nBebidas: " + listaDeBebidas + "\n"
            + "Congelados: " + listaDeCongelados + "\nFrutas: " + listaDeFrutas + "\nLaticínios: " + listaDeLaticinios + "\n Informe o item a ser removido");

        removerItem(item);
    }
    // exibirListaDeCompras();
    //  resposta = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou Nao");
    // resposta = resposta.toUpperCase();//deixando tudo maiusculo para comparação, caso usuario digite minusculo

} while (resposta == "SIM");

/*chamando a função para exibir as listas */
exibirListaDeCompras();

function exibirListaDeCompras() {
    alert("Sua Lista de compras!\nDoces: " + listaDeDoces + "\nBebidas: " + listaDeBebidas + "\n"
        + "Congelados: " + listaDeCongelados + "\nFrutas: " + listaDeFrutas + "\nLaticínios: " + listaDeLaticinios);

}

function removerItem(item) {
    let posicao;

    
        if (listaDeBebidas.includes(item)) {
            posicao = listaDeBebidas.indexOf(item);
            listaDeBebidas.splice(posicao, 1);
            alert(`Item ${item} removido da lista!`);
               
        } else if (listaDeCongelados.includes(item)) {
            posicao = listaDeCongelados.indexOf(item);
            listaDeCongelados.splice(posicao, 1);
            alert(`Item ${item} removido da lista!`);

        } else if (listaDeDoces.includes(item)) {
            posicao = listaDeDoces.indexOf(item);
            listaDeDoces.splice(posicao, 1);
            alert(`Item ${item} removido da lista!`);


        } else if (listaDeFrutas.includes(item)) {
            posicao = listaDeFrutas.indexOf(item);
            listaDeFrutas.splice(posicao, 1);
            alert(`Item ${item} removido da lista!`);

        } else if (listaDeLaticinios.includes(item)) {
            posicao = listaDeLaticinios.indexOf(item);
            listaDeLaticinios.splice(posicao, 1);
            alert(`Item ${item} removido da lista!`);

        } else {
            alert("Não  foi possivel encontrar o item dentro da lista!\nCausas: a lista pode estar vazia ou o elemento não estar incluso na mesma!");
        }

    }

/*
    function verificarListaVazia(lista) {
        if (lista.length === 0) {
            return 0;
        }
    }
        */