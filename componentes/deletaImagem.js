const BotaoDeletaImg = () => { 
    const botaoDeletaImg = document.createElement('button')

    botaoDeletaImg.innerText = 'deletar'
    botaoDeletaImg.addEventListener('click', deletarImg)

    return botaoDeletaImg
}

const deletarImg = (evento,id) => { 
    const botaoDeletaImg = evento.target
    const listItem = botaoDeletaImg.parentElement
    const nome = listItem.firstElementChild
    var nomeSource = nome.id.replace('output','')
    var comodo = localStorage.getItem('comodoDaVez')
    var arquivosDoComodo = localStorage.getItem(comodo+'-arquivos')
    var arquivos = arquivosDoComodo.split(',')
    arquivos.splice(indexAlt,1)
    arquivos.splice(indexAlt,1)
    localStorage.setItem(comodo+'-arquivos',arquivos)
    //listItem.remove()
    //window.location.reload()
    return botaoDeletaImg

}

export default BotaoDeletaImg