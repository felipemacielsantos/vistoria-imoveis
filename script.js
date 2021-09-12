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

var rglocador = document.getElementById('rglocad')
var rglocatario = document.getElementById('rglocat')
var cpflocador = document.getElementById('cpflocad')
var cpflocatario = document.getElementById('cpflocat')
var formatadoArray = []
var formatadoString = ''
rglocador.addEventListener("change", function() {
    formatadoArray = acertaRG(this);
    formatadoString = formatadoArray.join()
    console.log(formatadoString.replace(/,/g, ""))
    document.getElementById('rglocad').setAttribute('type', 'text')
    document.getElementById('rglocad').value = formatadoString.replace(/,/g, "")
  });
rglocatario.addEventListener("change", function() {
    formatadoArray = acertaRG(this);
    formatadoString = formatadoArray.join()
    console.log(formatadoString.replace(/,/g, ""))
    document.getElementById('rglocat').setAttribute('type', 'text')
    document.getElementById('rglocat').value = formatadoString.replace(/,/g, "")
  });
cpflocador.addEventListener("change", function() {
    formatadoArray = acertaCPF(this);
    formatadoString = formatadoArray.join()
    console.log(formatadoString.replace(/,/g, ""))
    document.getElementById('cpflocad').setAttribute('type', 'text')
    document.getElementById('cpflocad').value = formatadoString.replace(/,/g, "")
  });
cpflocatario.addEventListener("change", function() {
    formatadoArray = acertaCPF(this);
    formatadoString = formatadoArray.join()
    console.log(formatadoString.replace(/,/g, ""))
    document.getElementById('cpflocat').setAttribute('type', 'text')
    document.getElementById('cpflocat').value = formatadoString.replace(/,/g, "")
  });

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
    location.assign('vistoria.html')
}

function acertaRG(input) {
    var tamanho = input.value.length
    var auxiliar = []
    if (tamanho == 9) {
        auxiliar[11] = input.value[8]
        auxiliar[10] = '-'
        auxiliar[9] = input.value[7]
        auxiliar[8] = input.value[6]
        auxiliar[7] = input.value[5]
        auxiliar[6] = '.'
        auxiliar[5] = input.value[4]
        auxiliar[4] = input.value[3]
        auxiliar[3] = input.value[2]
        auxiliar[2] = '.'
        auxiliar[1] = input.value[1]
        auxiliar[0] = input.value[0]
    }
    return auxiliar
}

function acertaCPF(input) {
    var tamanho = input.value.length
    var auxiliar = []
    if (tamanho == 11) {
        auxiliar[13] = input.value[10]
        auxiliar[12] = input.value[9]
        auxiliar[11] = '-'
        auxiliar[10] = input.value[8]
        auxiliar[9] = input.value[7]
        auxiliar[8] = input.value[6]
        auxiliar[7] = '.'
        auxiliar[6] = input.value[5]
        auxiliar[5] = input.value[4]
        auxiliar[4] = input.value[3]
        auxiliar[3] = '.'
        auxiliar[2] = input.value[2]
        auxiliar[1] = input.value[1]
        auxiliar[0] = input.value[0]
    }
    return auxiliar
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



