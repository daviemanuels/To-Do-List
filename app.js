const container = document.querySelector('.container');
const listaAtividades = document.querySelector('.lista_atividades');
const input = document.querySelector('.input');
const erro = document.querySelector('.erro');
const botaoCadastra = document.querySelector('.botao_adc');
const botaoLimparTudo = document.querySelector('.botao_del_todos')
const paletas = document.querySelector('.paletas_div')
const paleta1 = document.querySelector('#paleta1');
const paleta2 = document.querySelector('#paleta2');
const paleta3 = document.querySelector('#paleta3');

paleta1.addEventListener('click', () => definePaleta('seagreen'));
paleta2.addEventListener('click', () => definePaleta('slateblue'));
paleta3.addEventListener('click', () => definePaleta('tomato'))
botaoCadastra.addEventListener('click', () => cadastraAtividade())
botaoLimparTudo.addEventListener('click', () => removeAtividades())

const paleta4 = document.createElement("div")
paletas.appendChild(paleta4)
paleta4.classList.add("paleta")


function definePaleta(cor) {
    container.style.background = cor;
    listaAtividades.style.background = cor;
}

function removeAtividades() {
    while(listaAtividades.firstElementChild) {
        listaAtividades.removeChild(listaAtividades.firstElementChild)
    }
}

function removeUmaAtividade(atividade) {
    listaAtividades.removeChild(atividade);
}

function criaAtividade() {
    const atividade = document.createElement("div");
    atividade.classList.add("atividade");
    const nomeAtividade = document.createElement("p");
    atividade.textContent = input.value;
    const botaoLimpar = document.createElement("button");
    botaoLimpar.textContent = "Limpar";
    botaoLimpar.classList.add("botao_del");
    botaoLimpar.addEventListener('click', () => removeUmaAtividade(atividade))
    listaAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar);
}

function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none";
        criaAtividade();
    }else{
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}

function limpaInput(){
    input.value = "";
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();
    }
});