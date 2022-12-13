//==CONFIGURACION CON EL FORMULARIO==//

const url = "http://3.86.220.109:3000/api/contacto"; //Cambiar por ip del servidor en caso la db este en otra maquina. (34.193.52.0/)
 
const formContacto = document.getElementById("formulario-contactanos");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const descripcion = document.getElementById("descripcion");
 
formContacto.addEventListener('submit',
    (e) => {
        e.preventDefault();
        console.log('resgistrando');
        if (nombre.value == "" || correo.value == "" || descripcion.value == "") {
            mostrarMensajeError();
            return false;
        } else {
            console.log("Todos los campos están completos");
 
            let configuracion = {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        nombre: nombre.value,
                        correo: correo.value,
                        descripcion: descripcion.value
                    }
                )
            };
 
            fetch(url, configuracion)
                .then(response => {
                    // console.log('Respuesta del servidor: ', response);
                    response.json();
                    mostrarMensajeCorrecto();
                    limpiarCampos();
                });
        }
    }
);
 
/*Mensaje de confirmacion de matricula*/
function mostrarMensajeCorrecto() {
    let mensaje = document.getElementById("snackbar");
    mensaje.className = "show-correcto";
    mensaje.innerText = "Asunto resgistrado con exito 🙂";
    setTimeout(function () { mensaje.className = mensaje.className.replace("show-correcto", ""); }, 3000);
}
 
function mostrarMensajeError() {
    let mensaje = document.getElementById("snackbar");
    mensaje.className = "show-error";
    mensaje.innerText = "Valores incorrectos 🤨"
    setTimeout(function () { mensaje.className = mensaje.className.replace("show-error", ""); }, 3000);
}
 /*limpiar campos*/
function limpiarCampos(){
    nombre.value = "";
    correo.value = "";
    descripcion.value = "";
}
