
import BotaoDeleta from './componentes/deletaComodo.js'
var count = 0;
//document.getElementById("myForm").onsubmit = function() {finalizar()};
const criarComodo = (evento) => {
    evento.preventDefault()
    count = count + 1
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `
    <div id="ambiente${count}">
        <input class="nomeAmbiente" type="text" name="amb${count}" id="amb${count}" value="${valor}">
        <p><textarea class="descAmbiente" name="desc${count}" id="desc${count}" rows="4" cols="50" placeholder="Escreva as caracteristicas do ambiente..."></textarea></p>
    </div>`

    tarefa.innerHTML = conteudo

    //tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "

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
    sessionStorage.setItem('nomesAmbientes', nomes)
    const descricoes = []
    const descAmbientes = document.querySelectorAll(".descAmbiente");
    [].forEach.call(descAmbientes, (e)=>{
        descricoes.push(e.value)
       });
       sessionStorage.setItem('descAmbientes', descricoes)
    location.href='finalizar.html'
}

