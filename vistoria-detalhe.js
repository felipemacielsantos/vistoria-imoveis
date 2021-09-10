var comodos = sessionStorage.getItem('comodos')
var nome = sessionStorage.getItem('comodoDaVez')
var desc = sessionStorage.getItem('comodoDaVezDesc')
nome = nome.toLowerCase()
console.log(nome)
document.getElementById("h1").innerHTML = "Detalhes de "+nome
var campoNome = document.getElementById('nomeAmbiente')
campoNome.setAttribute('value', nome)

campoNome.addEventListener("change", salvaNome)

function salvaNome() {
  comodos
  sessionStorage.setItem('comodos', comodos)
}




