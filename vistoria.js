
import BotaoDeleta from './componentes/deletaComodo.js'
    var count = 0;
    const criarTarefa = (evento) => {
        count = count + 1;
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `
    <div id="ambiente1">
        <input type="text" name="amb${count}" id="amb${count}" value="${valor}">
    <p><textarea name="desc${count}" id="desc${count}" rows="4" cols="50" placeholder="Escreva as caracteristicas do ambiente..."></textarea></p>
    </div>`

    tarefa.innerHTML = conteudo

    //tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)