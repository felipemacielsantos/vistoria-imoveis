var botaoDownload = document.getElementById("download")
botaoDownload.addEventListener("click", downloadPagina)
var botaoNovo = document.getElementById("new")
botaoNovo.addEventListener("click", limpaTudo)
var z = 0;
function gerarVistoria() {
    
    vistoriador = localStorage.getItem('svistoriador')
    data = localStorage.getItem('sdata')
    
    locador = localStorage.getItem('slocador')
    endlocad = localStorage.getItem('sendlocad')
    rglocad = localStorage.getItem('srglocad')
    cpflocad = localStorage.getItem('scpflocad')

    locatario = localStorage.getItem('slocatario')
    endlocat = localStorage.getItem('sendlocat')
    rglocat = localStorage.getItem('srglocat')
    cpflocat = localStorage.getItem('scpflocat')

    endereco = localStorage.getItem('sendereco')
    tipoimovel = localStorage.getItem('stipoimovel')
    tipovist = localStorage.getItem('stipovist')

    dadoslocadvist.innerHTML = `<b> Vistoriador: </b> ${vistoriador} <p> <b>Data:</b> ${data}<br></br> </p><p><b>LOCADOR:</b>${locador}, portador do rg ${rglocad} e do CPF ${cpflocad}, residente e domiciliado à ${endlocad}<br></br>`
    dadoslocatvist.innerHTML = `<p><b>LOCATÁRIO:</b>${locatario}, portador do rg ${rglocat} e do CPF ${cpflocat}, residente e domiciliado à ${endlocat}<br></br>`
    dadosimovelvist.innerHTML = `<p><b>Endereço do imóvel:</b>${endereco}</p><p><b>Tipo de imóvel:</b> ${tipoimovel}</p><p><b>Tipo de Vistoria:</b>${tipovist}</p>`

    preencheAmbientes()
}

function preencheAmbientes(){
    const nomes = localStorage.getItem('comodos')
    var comodos = nomes.split(',')
    comodos.forEach(recuperaDesc)
}

function recuperaDesc(nome){
    var auxiliar = nome.toUpperCase()
    var desc = localStorage.getItem(auxiliar)
    criaElemento(nome,desc)
}

function criaElemento(nome,desc){
    const lista = document.querySelector('[data-list-ambientes]')
    const comodo = document.createElement('li')
    const conteudo = `
    <div>
        <p>${nome}</p>
        <p>${desc}</p>  
    </div>`
    comodo.innerHTML = conteudo
    lista.appendChild(comodo)
    var naosei = localStorage.getItem(nome.toUpperCase()+"-arquivos")
    var arquivosDoNavegador = []
    if (naosei != null){
        arquivosDoNavegador = naosei.split(',')
        for (var y=0; y<arquivosDoNavegador.length; y++){
            if(arquivosDoNavegador[y]!="data:image/png;base64" && arquivosDoNavegador[y].length > 4){
                const ambiente = document.createElement('div')
                const conteudo = `
                <img id="output${y}${z}" src="" width="320" height="180" />	
                `
                ambiente.innerHTML = conteudo
                lista.appendChild(ambiente)
                var bannerImg = document.getElementById('output'+y+z);
                bannerImg.src = "data:image/png;base64," + arquivosDoNavegador[y];
            }
        }
    }
    z+=1
}

function downloadPagina(){
    var pagina = document.getElementById('pagina')
    html2pdf().from(pagina).save()
}

function limpaTudo(){
    localStorage.clear();
    location.assign("/")
}