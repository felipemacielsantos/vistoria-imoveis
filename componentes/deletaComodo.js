const BotaoDeleta = () => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarComodo)

    return botaoDeleta
}

const deletarComodo = (evento) => { 
    const botaoDeleta = evento.target
    
    const comodo = botaoDeleta.parentElement

    comodo.remove()

    return botaoDeleta

}

export default BotaoDeleta