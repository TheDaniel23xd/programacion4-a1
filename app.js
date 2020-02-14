document.addEventListener("DOMContentLoaded", (event) =>{
    const formAlumnos = document.querySelector("#frmAlumno");
    formAlumnos.addEventListener("submit", (e)=>{
        e.preventDefault(); 

        let codigo = document.querySelector("#txtCodigoAlumno").value,
            nombre = document.querySelector("#txtNombreAlumno").value,
            direccion = document.querySelector("#txtDireccionAlumno").value,
            telefono = document.querySelector("#txtTelefonoAlumno").value;

            var keyCodigo = "codigo"+""+codigo;
            var keyNombre = "nombre"+""+nombre;
            var keyDireccion = "direccion"+""+direccion;
            var keyTelefono = "telefono"+""+telefono;

        if( 'localStorage' in localStorage ){
            window.localStorage.setItem(keyCodigo, codigo);
            window.localStorage.setItem(keyNombre, nombre);
            window.localStorage.setItem(keyDireccion, direccion);
            window.localStorage.setItem(keyTelefono, telefono);
        } 
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Algo salió mal!',
                timer:7000,
                timerProgressBar:true,
                footer: 'almacenamiento en local NO soportado!!! Actualizate!'
              })
        }
    });
    document.querySelector("#btnRecuperarAlumnos").addEventListener("click", (e)=>{
        if( 'localStorage' in window ){
            let Codigo=document.querySelector("#txtCodigoAlumno").value;
            if(codigo !=""){
                document.querySelector("#txtCodigoAlumno").value = window.localStorage.getItem("codigo"+codigo);
                document.querySelector("#txtNombreAlumno").value = window.localStorage.getItem("nombre"+codigo);
                document.querySelector("#txtDireccionAlumno").value =  window.localStorage.getItem("direccion"+codigo);
                document.querySelector("#txtTelefonoAlumno").value =  window.localStorage.getItem("telefono"+codigo);
            }else{
                Swal.fire('Agregue el codigo de los datos a recuperar')
            }
        } else{
            
            Swal.fire('No se encuentra los datos solicitados')
        }
    });
});

/*document.addEventListener("DOMContentLoaded",init);*/

/*document.addEventListener("DOMContentLoaded",function(event){
    alert("Pagina cargo forma 2");
});*/

/*function init(event){
    alert("Hola la pagina a cargado");
}*/