let listaInput=[];
let listaOutput=[];
let textoOutput="";
let textoInput="";
actualizarOutput();
/*document.addEventListener('input', function(e) {
    if (e.target.matches('#textoInput')) {
      const encrypt = document.getElementById('encryptButton');
      const decrypt = document.getElementById('decryptButton');
      if (e.target.value !== "") {
        encrypt.disabled = false;
        decrypt.disabled = false;
      } else {
        encrypt.disabled = true;
        decrypt.disabled = true;
      }
    }
  });*/

  function copiar(){
        // Obtener el input de texto
        const inputTexto = document.getElementById('textoOutput');
        
        // Copiar el texto al portapapeles utilizando la API del portapapeles
        navigator.clipboard.writeText(inputTexto.value)
          .then(() => {
            // Informar al usuario que el texto ha sido copiado
            alert('Texto copiado: ' + inputTexto.value);
          })
          .catch(err => {
            // Manejar cualquier error
            console.error('Error al copiar el texto: ', err);
          });
      
  }
function capturar(){
     listaInput=[];
     listaOutput=[];
     textoOutput="";
     textoInput="";
    
    textoInput=document.getElementById("textoInput").value;
    if (textoInput === "") {
        alert("Tiene que ingresar un texto para encriptar");
    }else{
        listaInput=textoInput.split("");
        console.log(listaInput);
        encriptar();
        imprimir();
        actualizarOutput();
    }
}


function encriptar(){
    
    for (let i = 0; i < listaInput.length; i++) {
        let value=listaInput[i];
        switch (value) {
            case "a":
                listaOutput[i]="ai"
                break;
            case "e":
                listaOutput[i]="enter"
                break;
            case "i":
                listaOutput[i]="imes"
                break;
            case "o":
                listaOutput[i]="ober"
                break;
            case "u":
                listaOutput[i]="ufat"
                break;
            default:
                listaOutput[i]=listaInput[i];
                break;
        }
    }
    
}
function isin(){
    let lista ;
}
function desencriptar(){
    listaInput=[];
    listaOutput=[];
    textoOutput="";
    textoInput="";
   
   textoInput=document.getElementById("textoInput").value;
   if (textoInput === "") {
       alert("Tiene que ingresar un texto para desencriptar");
   }else{
       
       listaInput=dividirCadena(textoInput);
       console.log("Lista input si: "+listaInput);
       for (let i = 0; i < listaInput.length; i++) {
        let value=listaInput[i];
        switch (value) {
            case "ai":
                listaOutput[i]="a"
                break;
            case "enter":
                listaOutput[i]="e"
                break;
            case "imes":
                listaOutput[i]="i"
                break;
            case "ober":
                listaOutput[i]="o"
                break;
            case "ufat":
                listaOutput[i]="u"
                break;
            default:
                listaOutput[i]=listaInput[i];
        }
       
       }imprimir();
       actualizarOutput();
    }
}
function dividirCadena(cadena) {
    // Define las secuencias que queremos separar
    const patrones = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    // Une los patrones en una expresión regular
    const regex = new RegExp(patrones.join('|'), 'g');
  
    // Crear una lista vacía para almacenar los resultados
    const resultado = [];
    let ultimoIndice = 0;
  
    // Utiliza la expresión regular para encontrar y separar las secuencias
    cadena.replace(regex, (match, offset) => {
      if (ultimoIndice !== offset) {
        // Añade el texto que no coincide con el patrón
        resultado.push(cadena.slice(ultimoIndice, offset));
      }
      // Añade el patrón encontrado
      resultado.push(match);
      ultimoIndice = offset + match.length;
    });
  
    // Añade cualquier texto restante después de la última coincidencia
    if (ultimoIndice < cadena.length) {
      resultado.push(cadena.slice(ultimoIndice));
    }
  console.log(resultado);
    return resultado;
  }
  

function imprimir(){
    for (let i = 0; i < listaOutput.length; i++) {
        textoOutput+=listaOutput[i];
    }
    document.getElementById('textoOutput').value=textoOutput;
   actualizarOutput();
    console.log(textoOutput);
}

document.getElementById('textoInput').addEventListener('input', function (e) {
    // Eliminar caracteres no permitidos
    this.value = this.value.replace(/[^a-z\s]/g, '');
});
document.getElementById('textoInput').addEventListener('focus', function() {
    this.value = this.value.trimStart();
});
//document.addEventListener('DOMContentLoaded', () => {
function actualizarOutput() {
    const output = document.getElementById('textoOutput');
    const customPlaceholder = document.getElementById('custom-placeholder');
    const divButtonCopiar = document.getElementById('divButtonCopiar');
    function togglePlaceholder() {
        if (output.value === '') {
            customPlaceholder.style.display = 'flex';
            divButtonCopiar.style.display = 'none';
        } else {
            customPlaceholder.style.display = 'none';
            divButtonCopiar.style.display = 'flex';
        }
    }

    // Inicializa el placeholder
    togglePlaceholder();

    // Añade el evento de escucha al input
    output.addEventListener('input', togglePlaceholder);
}
//});


