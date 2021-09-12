function gerarVistoria() {
    
    vistoriador = sessionStorage.getItem('svistoriador')
    data = sessionStorage.getItem('sdata')
    
    locador = sessionStorage.getItem('slocador')
    endlocad = sessionStorage.getItem('sendlocad')
    rglocad = sessionStorage.getItem('srglocad')
    cpflocad = sessionStorage.getItem('scpflocad')

    locatario = sessionStorage.getItem('slocatario')
    endlocat = sessionStorage.getItem('sendlocat')
    rglocat = sessionStorage.getItem('srglocat')
    cpflocat = sessionStorage.getItem('scpflocat')

    endereco = sessionStorage.getItem('sendereco')
    tipoimovel = sessionStorage.getItem('stipoimovel')
    tipovist = sessionStorage.getItem('stipovist')

    dadoslocadvist.innerHTML = `<b> Vistoriador: </b> ${vistoriador} <p> <b>Data:</b> ${data}<br></br> </p><p><b>LOCADOR:</b>${locador}, portador do rg ${rglocad} e do CPF ${cpflocad}, residente e domiciliado à ${endlocad}<br></br>`
    dadoslocatvist.innerHTML = `<p><b>LOCATÁRIO:</b>${locatario}, portador do rg ${rglocat} e do CPF ${cpflocat}, residente e domiciliado à ${endlocat}<br></br>`
    dadosimovelvist.innerHTML = `<p><b>Endereço do imóvel:</b>${endereco}</p><p><b>Tipo de imóvel:</b> ${tipoimovel}</p><p><b>Tipo de Vistoria:</b>${tipovist}</p>`

    preencheAmbientes()
}

function preencheAmbientes(){
    const nomes = sessionStorage.getItem('comodos')
    var comodos = nomes.split(',')
    comodos.forEach(recuperaDesc)
}

function recuperaDesc(nome){
    var auxiliar = nome.toUpperCase()
    var desc = sessionStorage.getItem(auxiliar)
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