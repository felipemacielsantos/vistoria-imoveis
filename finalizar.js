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
    const nomes = sessionStorage.getItem('nomesAmbientes')
    const nomesJson = JSON.parse(nomes)
    const descs = sessionStorage.getItem('descAmbientes')
    const descsJson = JSON.parse(descs)
    for(var i=0; i<nomesJson.length; i++){
        criaElemento(nomesJson[i],descsJson[i])
    }
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