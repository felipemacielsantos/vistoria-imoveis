var botaoDownload = document.getElementById("download")
botaoDownload.addEventListener("click", downloadPagina)
var botaoNovo = document.getElementById("new")
botaoNovo.addEventListener("click", limpaTudo)

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
    console.log(desc)
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
}

// function downloadPDF() {
   
//     html2canvas(document.querySelector('#sec'),{

//         allowTaint: true,
//         useCORS: true,
//         scale: 0
//     }).then(canvas => {
//         document.body.appendChild(canvas)
//         var imgdata = canvas.toDataURL('image/png') 

//         var pdf = new jsPDF()
//         pdf.addImage(imgdata, 'PNG', 5, 10)
//         pdf.save("vistoria.pdf")
//     }
//     )
// }

function downloadPagina(){
    var pagina = document.getElementById('pagina')
    html2pdf().from(pagina).save()
}

function downloadPDF() {

    var doc = new jsPDF()
    
    var tituloPDF = window.document.getElementById("titulo")
    var dadoslocadvistPDF = window.document.getElementById("dadoslocadvist")
    var dadoslocatvistPDF = window.document.getElementById("dadoslocatvist")
    var dadosimovelvistPDF = window.document.getElementById("dadosimovelvist")
    var listPDF = window.document.getElementsByClassName("list")
 

    doc.fromHTML(
        tituloPDF,
        15,
        15,
        {
            'width':180
        }
    )
    doc.fromHTML(
        dadoslocadvistPDF,
        15,
        15,
        {
            'width':180
        }
    )
    doc.fromHTML(
        dadoslocatvistPDF,
        15,
        15,
        {
            'width':180
        }
    )
    doc.fromHTML(
        dadosimovelvistPDF,
        15,
        15,
        {
            'width':180
        }
    )
    doc.fromHTML(
        listPDF,
        15,
        15,
        {
            'width':180
        }
    )
        doc.save("teste.pdf")
}

function limpaTudo(){
    localStorage.clear();
    location.assign("/")
}