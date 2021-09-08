var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
var today = yyyy+'-'+mm+'-'+dd;
document.getElementById('data').setAttribute('value', today)

document.getElementById("myForm").onsubmit = function() {armazenar()};


function armazenar(){
   
    var vistoriador = document.getElementById('vistoriador').value
    sessionStorage.setItem("svistoriador" , vistoriador)
    var data = document.getElementById('data').value
    sessionStorage.setItem("sdata" , data)

    var locador = document.getElementById('locador').value
    sessionStorage.setItem("slocador" , locador)
    var endlocad = document.getElementById('endlocad').value
    sessionStorage.setItem("sendlocad" , endlocad)
    var rglocad = document.getElementById('rglocad').value
    sessionStorage.setItem("srglocad" , rglocad)
    var cpflocad = document.getElementById('cpflocad').value
    sessionStorage.setItem("scpflocad" , cpflocad)

    var locatario = document.getElementById('locatario').value
    sessionStorage.setItem("slocatario" , locatario)
    var endlocat = document.getElementById('endlocat').value
    sessionStorage.setItem("sendlocat" , endlocat)
    var rglocat = document.getElementById('rglocat').value
    sessionStorage.setItem("srglocat" , rglocat)
    var cpflocat = document.getElementById('cpflocat').value
    sessionStorage.setItem("scpflocat" , cpflocat)

    var endereco = document.getElementById('endereco').value
    sessionStorage.setItem("sendereco" , endereco)
    var tipoimovel = document.getElementById('tipoimovel').value
    sessionStorage.setItem("stipoimovel" , tipoimovel)
    var tipovist = document.getElementById('tipovist').value
    sessionStorage.setItem("stipovist" , tipovist)
    
}

function step1() {
    //sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer')
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

    dadosvist1.innerHTML = `<b> Vistoriador: </b> ${vistoriador} <p> <b>Data:</b> ${data} </p>`
    dadoslocad1.innerHTML = `<p><b>Nome do Locador:</b> ${locador}</p> <p><b>Endereço do Locador:</b> ${endlocad}</p><p><b>RG do Locador:</b> ${rglocad}</p><p><b>CPF do Locador:</b> ${cpflocad}</p>`
    dadoslocat1.innerHTML = `<p><b>Nome do Locatário:</b> ${locatario}</p><p><b>Endereço do Locatário:</b> ${endlocat}</p><p><b>RG do Locatário:</b>${rglocat}</p><p><b>CPF do Locatário:</b> ${cpflocat}</p>`
    dadosimovel1.innerHTML = `<p><b>Endereço do imóvel:</b>${endereco}</p><p><b>Tipo de imóvel:</b> ${tipoimovel}</p><p><b>Tipo de Vistoria:</b>${tipovist}</p>`
    

}


/*function back() {
    
    location.replace('index.html')
    
    var vistoriadorPreenchido = sessionStorage.getItem("svistoriador")
    if (vistoriadorPreenchido =! "") {
        vistoriador.setAttribute('value', vistoriadorPreenchido)
        
    }
    
   document.getElementById('mostrar').setAttribute('value', 'oi')
*/

function nxtdados() {
    location.replace('vistoria.html')
}



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

    amb1 = sessionStorage.getItem('samb1')
    desc1 = sessionStorage.getItem('sdesc1')
    amb2 = sessionStorage.getItem('samb2')
    desc2 = sessionStorage.getItem('sdesc2')
    amb3 = sessionStorage.getItem('samb3')
    desc3 = sessionStorage.getItem('sdesc3')
    amb4 = sessionStorage.getItem('samb4')
    desc4 = sessionStorage.getItem('sdesc4')

    ambiente1.innerHTML = `<b>${amb1}</b><p>${desc1}</p>`
    ambiente2.innerHTML = `<b>${amb2}</b><p>${desc2}</p>`
    ambiente3.innerHTML = `<b>${amb3}</b><p>${desc3}</p>`
    ambiente4.innerHTML = `<b>${amb4}</b><p>${desc4}</p>`

}

/*navigator.mediaDevices.getUserMedia({video: true})
.then(function (mediaStream) { 
  var video = document.querySelector('#video'); 
     video.srcObject = mediaStream; 
     video.play();
})
.catch(function (err) {
  console.log('Não há permissões para acessar a webcam')
})

document.querySelector('#capture').addEventListener('click', function (e) {
    var canvas = document.querySelector("#canvas");  
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0)
  })*/



