const BotaoDetalhe = () => { 
    const botaoDetalhe = document.createElement('button')

    botaoDetalhe.innerText = 'Detalhes'
    botaoDetalhe.addEventListener('click', detalheComodo)

    return botaoDetalhe
}

const detalheComodo = (evento) => { 
    const botaoDetalhe = evento.target
    
    const comodo = botaoDetalhe.parentElement

    const div = comodo.firstElementChild
    localStorage.setItem('comodoDaVez',div.innerText)
    location.assign('vistoria-detalhe.html')
    return botaoDetalhe

}

export default BotaoDetalhe