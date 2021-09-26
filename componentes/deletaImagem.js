var comodo = localStorage.getItem('comodoDaVez')
var index = -1
var arquivos = []
var nomeSource = ''
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
    nomeSource = nome.id.replace('output','')
    var arquivosDoComodo = localStorage.getItem(comodo+'-arquivos')
    arquivos = arquivosDoComodo.split(',')
    arquivos.forEach(verificacao)
    listItem.remove()
    window.location.reload()
    return botaoDeletaImg

}

function verificacao(arquivo){

    if(arquivo.length < 4){
        console.log("arquivo do parametro = "+arquivo)
        console.log("nomeSource global = "+nomeSource)
        if(arquivo == nomeSource){
            index = arquivos.indexOf(arquivo)
            console.log("arquivo ="+arquivo)
            console.log("index ="+index)
            arquivos.splice(index,1) //remove id
            arquivos.splice(index,1) //remove cabeçalho
            arquivos.splice(index,1) //remove endereço
            localStorage.setItem(comodo+'-arquivos',arquivos)
            console.log(arquivos)
        }
    }

}

export default BotaoDeletaImg