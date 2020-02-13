document.addEventListener("DOMContentLoaded", (event) =>{
    const formAlumnos = document.querySelector("#frmAlumno");
    formAlumnos.addEventListener("submit", (e)=>{
        e.preventDefault(); 

        let codigo = document.querySelector("#txtCodigoAlumno").value,
            nombre = document.querySelector("#txtNombreAlumno").value,
            direccion = document.querySelector("#txtDireccionAlumno").value,
            telefono = document.querySelector("#txtTelefonoAlumno").value;

            var keycodigo ="codigo"+codigo;
            var keynombre ="nombre"+nombre;
            var keydireccion ="direccion"+direccion;
            var keytelefono ="telefono"+telefono;

        if( 'localStorage' in localStorage ){
            window.localStorage.setItem(keycodigo, codigo);
            window.localStorage.setItem(keynombre, nombre);
            window.localStorage.setItem(keydireccion, direccion);
            window.localStorage.setItem(keytelefono, telefono);
        } 
        else {
            alert("No se pudo Guardar los datos!!");
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
                alert("Agregue el codigo de los datos a recuperar");
            }
        } else{
            alert("No se encuentra los datos solicitados");
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