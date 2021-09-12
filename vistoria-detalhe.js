var listaDeComodos = sessionStorage.getItem('comodos')
var comodos = listaDeComodos.split(',')
var nome = sessionStorage.getItem('comodoDaVez')
var desc = sessionStorage.getItem(nome)
var campoNome = document.getElementById('nomeAmbiente')
var campoDesc = document.getElementById('descricaoAmbiente')

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

//metodo do autosave
function salvaNome() {
  const index = comodos.indexOf(nome.toLowerCase);
  comodos.splice(index,1)
  comodos.push(campoNome.value)
  sessionStorage.setItem('comodos', comodos)
}

function salvaDesc() {
  sessionStorage.setItem(nome, campoDesc.value)
}