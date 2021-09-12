
import BotaoDeleta from './componentes/deletaComodo.js'
import BotaoDetalhe from './componentes/detalheComodo.js';
var count = 0;
var comodos = []
var listaDeComodos = sessionStorage.getItem('comodos')
if (listaDeComodos != null){
    comodos = listaDeComodos.split(',')
    comodos.forEach(criarComodoExiste)
}

function colocaComodos(comodos){
    const lista = document.querySelector('[data-list]')
    const ambiente = document.createElement('li')
    for (var x=0; x<comodos.length; x++){
        const conteudo = `
        <p class="nomeAmbiente" name="amb${count}" id="amb${count}">a</p>
    `
    ambiente.innerHTML = conteudo
    lista.appendChild(ambiente)
    }
}
const criarComodo = (evento) => {
    evento.preventDefault()
    count = count + 1
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    if (valor != '' && valor != ' '){
    const ambiente = document.createElement('li')
    ambiente.classList.add('task')
    const conteudo = `
        <p class="nomeAmbiente" name="amb${count}" id="amb${count}">${valor.toUpperCase()}</p>
    `
    
    ambiente.innerHTML = conteudo
    ambiente.appendChild(BotaoDetalhe())
    ambiente.appendChild(BotaoDeleta())
    comodos.push(valor)
    sessionStorage.setItem('comodos',comodos)
    lista.appendChild(ambiente)
    input.value = ""
    }
}

const novaTarefa = document.querySelector('[data-form-button]')
const finalizarVistoria = document.querySelector('#finalizar')

novaTarefa.addEventListener('click', criarComodo)
finalizarVistoria.addEventListener('click', finalizar)


function finalizar() {
    const nomes = [];
    const nomeAmbientes = document.querySelectorAll(".nomeAmbiente");
    [].forEach.call(nomeAmbientes, (e)=>{
        nomes.push(e.value)
       });
    sessionStorage.setItem('nomesAmbientes', JSON.stringify(nomes))
    const descricoes = []
    const descAmbientes = document.querySelectorAll(".descAmbiente");
    [].forEach.call(descAmbientes, (e)=>{
        descricoes.push(e.value)
       });
       sessionStorage.setItem('descAmbientes', JSON.stringify(descricoes))
    
       location.assign('finalizar.html')
}


function criarComodoExiste (nome) {
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = nome
    if (valor != '' && valor != ' '){
    const ambiente = document.createElement('li')
    ambiente.classList.add('task')
    const conteudo = `
        <p class="nomeAmbiente" name="amb${count}" id="amb${count}">${valor.toUpperCase()}</p>
    `
    ambiente.innerHTML = conteudo
    ambiente.appendChild(BotaoDetalhe())
    ambiente.appendChild(BotaoDeleta())
    lista.appendChild(ambiente)
    input.value = ""
    }
}