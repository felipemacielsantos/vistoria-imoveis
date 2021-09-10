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
    sessionStorage.setItem('comodoDaVez',div.innerText)
    location.replace('vistoria-detalhe.html')
    return botaoDetalhe

}

export default BotaoDetalhe