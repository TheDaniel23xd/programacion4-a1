var $ = el => document.querySelector(el),
    frmAlumnos = $("#frmAlumnos");
frmAlumnos.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();
    console.log(frmAlumnos);
    
    
    let alumno = {
        accion    : 'nuevo',
        codigo    : $("#txtCodigoAlumno").value,
        nombre    : $("#txtNombreAlumno").value,
        direccion : $("#txtDireccionAlumno").value,
        telefono  : $("#txtTelefonoAlumno").value
    };
    fetch(`/private/Modulos/alumnos/procesos.php?proceso=recibirDatos&alumno=${JSON.stringify(alumno)}`).then( resp=>resp.json()).then(resp=>{
        console.log(alumno);
      $("#respuestaAlumno").innerHTML = `<div class="alert alert-success" role="alert">${resp.msg}</div> `;
    });
});