const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura'); 
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const azulInverno = {
    nome : 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const verdeCispreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const meiaNoite = {
    nome:'Meia-noite',
    pasta:'imagens-meia-noite'
}

const estelar ={
    nome: 'Estelar',
    pasta:'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCispreste, azulInverno, meiaNoite, estelar , rosaClaro];
const opcoesTamanho = ['41mm' , '45mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src= './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+ imagemSelecionada +'.jpeg';
    imagemVisualizacao.src ='./imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}


function trocarTamanho(){
    //atualizar variável de controle de tamanho
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //mudar titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //mudar tamanho da imagem 
    if(opcoesTamanho[tamanhoSelecionado] === '41mm'){
         
        imagemVisualizacao.classList.add('caixa-pequena');
    
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarCor(){
    //atualizar variável de controle  
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //trocar o nome da cor
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;
    //Atualização da miniaturas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

    //Cor imagem vizualização
    imagemVisualizacao.src ='./imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}