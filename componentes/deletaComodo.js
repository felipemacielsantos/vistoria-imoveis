const BotaoDeleta = () => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarComodo)

    return botaoDeleta
}

const deletarComodo = (evento) => { 
    const botaoDeleta = evento.target
    
    const comodo = botaoDeleta.parentElement
    const nome = comodo.firstElementChild.innerText.toLowerCase()

    comodo.remove()
    var listaDeComodos = sessionStorage.getItem('comodos')
    var comodos = listaDeComodos.split(',')
    const index = comodos.indexOf(nome);
    comodos.splice(index,1)
    sessionStorage.setItem('comodos',comodos)
    return botaoDeleta

}

export default BotaoDeleta