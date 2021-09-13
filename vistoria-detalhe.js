var posicaoDefinitava = 0
var listaDeComodos = localStorage.getItem('comodos')
var comodos = listaDeComodos.split(',')
var nome = localStorage.getItem('comodoDaVez')
var desc = localStorage.getItem(nome)
var naosei = localStorage.getItem(nome+"-arquivos")
var arquivosDoNavegador = []
if (naosei != null){
  arquivosDoNavegador = naosei.split(',')
  console.log(arquivosDoNavegador)
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

function loadFile(event) {
  const arquivos = event.target.files
  const qtdArquivos = arquivos.length
  var base64data = null
  for (var x=0; x<qtdArquivos; x++){
    const lista = document.querySelector('[data-list]')
    const ambiente = document.createElement('li')
    var arq = event.target.files[x]
    var caminho = URL.createObjectURL(event.target.files[x]);
    const conteudo = `
    <img id="output${x+posicaoDefinitava}" src="${caminho}" width="320" height="180" />	
    `
    var soma = x+posicaoDefinitava
    ambiente.innerHTML = conteudo
    lista.appendChild(ambiente)
    var imgTag = document.getElementById("output"+soma);
    var reader = new FileReader();
    reader.readAsDataURL(arq); 
    reader.onloadend = function() {
      base64data = reader.result;
      armazenaImagemNoNavegador(base64data.toString())
    }
  }
  //console.log(arquivosDoNavegador)
  //localStorage.setItem(nome+"-arquivos", arquivosDoNavegador)
	/*var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);*/
}

function carregaImagensSalvas(caminho){
    const lista = document.querySelector('[data-list]')
    const ambiente = document.createElement('li')
    const conteudo = `
    <img id="output${posicaoDefinitava}" src="" width="320" height="180" />	
    `
    ambiente.innerHTML = conteudo
    lista.appendChild(ambiente)
    posicaoDefinitava+=1
}

function armazenaImagemNoNavegador(string){
  arquivosDoNavegador.push(string)
  localStorage.setItem(nome+"-arquivos", arquivosDoNavegador)
}