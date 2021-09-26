import BotaoDeletaImg from './componentes/deletaImagem.js'
var posicaoDefinitava = 0
var listaDeComodos = localStorage.getItem('comodos')
var comodos = listaDeComodos.split(',')
var nome = localStorage.getItem('comodoDaVez')
var desc = localStorage.getItem(nome)
var naosei = localStorage.getItem(nome+"-arquivos")
var arquivosDoNavegador = []
var id = 0
if (naosei != null && naosei != ''){
  arquivosDoNavegador = naosei.split(',')
  arquivosDoNavegador.forEach(carregaImagensSalvas)
}
var campoNome = document.getElementById('nomeAmbiente')
var campoDesc = document.getElementById('descricaoAmbiente')
var fileList = document.getElementById('file')

//seta o titulo
document.getElementById("h1").innerHTML = "Detalhes de "+nome.toLowerCase()

//inicializa os campos
campoNome.setAttribute('value', nome)
if (desc != null){
  campoDesc.value = desc
}else{
  campoDesc.value = ''
}

//eventos de escuta
campoNome.addEventListener("change", salvaNome)
campoDesc.addEventListener("change", salvaDesc)
fileList.addEventListener("change", loadFile)

//metodo do autosave
function salvaNome() {
  const index = comodos.indexOf(nome.toLowerCase);
  comodos.splice(index,1)
  comodos.push(campoNome.value)
  localStorage.setItem('comodos', comodos)
}

function salvaDesc() {
  localStorage.setItem(nome, campoDesc.value)
}

async function loadFile(event) {
  
  const arquivos = event.target.files
  const qtdArquivos = arquivos.length
  var teste;
  let file;
  for (var x=0; x<qtdArquivos; x++){
    let reader = new FileReader();
    file = arquivos[x];
    reader.onload = (file) => {
      teste = reader.result.toString()
      console.log("x="+x)
      console.log("posicao="+posicaoDefinitava)
      posicaoDefinitava = posicaoDefinitava+1
      var aux = `${x}`+`${posicaoDefinitava}`+','+teste
      armazenaImagemNoNavegador(aux);
    }
    reader.readAsDataURL(file)
    // const lista = document.querySelector('[data-list]')
    // const ambiente = document.createElement('li')
    // var arq = event.target.files[x]
    // var caminho = URL.createObjectURL(event.target.files[x]);
    // const conteudo = `
    // <img id="output${x}${posicaoDefinitava}" src="${teste}" width="320" height="180" />	
    // `
    // var soma = x+posicaoDefinitava
    // ambiente.innerHTML = conteudo
    // ambiente.appendChild(BotaoDeletaImg(posicaoDefinitava))
    // lista.appendChild(ambiente)
    // console.log(lista)
    // var imgTag = document.getElementById("output"+soma);
    posicaoDefinitava = posicaoDefinitava + 1
  }
  
  window.location.reload()
    
  //console.log(arquivosDoNavegador)
  //localStorage.setItem(nome+"-arquivos", arquivosDoNavegador)
	/*var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);*/
}

function carregaImagensSalvas(caminho){
  if(caminho!="data:image/png;base64" && caminho.length > 4 ){
      const lista = document.querySelector('[data-list]')
      const ambiente = document.createElement('li')
      const conteudo = `
      <img id="output${id}" src="" width="320" height="180" />	
      `
      ambiente.innerHTML = conteudo
      ambiente.appendChild(BotaoDeletaImg(id))
      lista.appendChild(ambiente)
      var bannerImg = document.getElementById('output'+id);
      bannerImg.src = "data:image/png;base64," + caminho;
  }else{
    if (caminho.length < 4){
      console.log(caminho)

      id = parseInt(caminho)
      console.log(id)
    }
  }
}

function armazenaImagemNoNavegador(string){
  arquivosDoNavegador.push(string)
  localStorage.setItem(nome+"-arquivos", arquivosDoNavegador)
}