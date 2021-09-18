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
    const nomeSource = nome.src
    var comodo = localStorage.getItem('comodoDaVez')
    var arquivosDoComodo = localStorage.getItem(comodo+'-arquivos')
    console.log(arquivosDoComodo)
    console.log(listItem)
    listItem.remove()
    var arquivos = arquivosDoComodo.split(',')
    console.log(arquivos)
    
    const index = arquivos.indexOf(nomeSource);
    const indexAlt = arquivos.indexOf(nomeSource)-1;
    arquivos.splice(indexAlt,1)
    arquivos.splice(indexAlt,1)
    console.log(arquivos)
    localStorage.setItem(comodo+'-arquivos',arquivos)
    window.location.reload()
    return botaoDeletaImg

}

export default BotaoDeletaImg