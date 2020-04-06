<? php 
include ( '../../Config/Config.php' );
$ alumno = nuevo alumno ( $ Conexion );

$ proceso = '' ;
if ( isset ( $ _GET [ 'proceso' ]) && strlen ( $ _GET [ 'proceso' ])> 0 ) {
	$ proceso = $ _GET [ 'proceso' ];
}
$ alumno -> $ proceso ( $ _GET [ 'alumno' ]);
print_r ( json_encode ( $ alumno -> respuesta ));

clase alumno {
    privado  $ datos = array (), $ db ;
    public  $ respuesta = [ 'msg' => 'correcto' ];
    
     función  pública __construct ( $ db ) {
        $ this -> db = $ db ;
    }
     función  pública recibirDatos ( $ alumno ) {
        $ this -> datos = json_decode ( $ alumno , verdadero );
        $ this -> validar_datos ();
    }
     función  privada validar_datos () {
        if ( empty ( $ this -> datos [ 'codigo' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese el codigo del estudiante' ;
        }
        if ( empty ( $ this -> datos [ 'nombre' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese el nombre del estudiante' ;
        }
        if ( empty ( $ this -> datos [ 'direccion' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese la direccion del estudiante' ;
        }
        $ this -> almacen_alumno ();
    }
     función  privada almacena_alumno () {
        if ( $ this -> respuesta [ 'msg' ] === 'correcto' ) {
            if ( $ this -> datos [ 'accion' ] === 'nuevo' ) {
                $ this -> db -> consultas ( '
                    INSERTAR EN LOS ALUMNOS (codigo, nombre, direccion, telefono) VALORES (
                        "' . $ this -> datos [ ' codigo ' ]. '",
                        "' . $ this -> datos [ ' nombre ' ]. '",
                        "' . $ this -> datos [ ' direccion ' ]. '",
                        "' . $ this -> datos [ ' telefono ' ]. '"
                    )
                ' );
                $ this -> respuesta [ 'msg' ] = 'Registro insertado correctamente' ;
            } else  if ( $ this -> datos [ 'accion' ] === 'modificar' ) {
                $ this -> db -> consultas ( '
                   ACTUALIZAR conjunto de alumnos
                        codigo = "' . $ this -> datos [ ' codigo ' ]. '",
                        nombre = "' . $ this -> datos [ ' nombre ' ]. '",
                        direccion = "' . $ this -> datos [ ' direccion ' ]. '",
                        telefono = "' . $ this -> datos [ ' telefono ' ]. '"
                    DONDE idAlumno = " ' $ este -> Datos [ 'idAlumno' ]. '"
                ' );
                $ this -> respuesta [ 'msg' ] = 'Registro actualizado correctamente' ;
            }
        }
    }
     función  pública buscarAlumno ( $ valor = '' ) {
        $ this -> db -> consultas ( '
            seleccione alumnos.idAlumno, alumnos.codigo, alumnos.nombre, alumnos.direccion, alumnos.telefono
            de alumnos
            donde alumnos.codigo como "% ' . $ valor . '%" o alumnos.nombre como "% ' . $ valor . '%" o alumnos.telefono como "% ' . $ valor . '%"
        ' );
        devuelve  $ this -> respuesta = $ this -> db -> obtener_datos ();
    }
     función  pública eliminarAlumno ( $ idAlumno = '' ) {
        $ this -> db -> consultas ( '
            eliminar alumnos
            de alumnos
            donde alumnos.idAlumno = "' . $ idAlumno . '"
        ' );
        $ this -> respuesta [ 'msg' ] = 'Registro eliminado correctamente' ;
    }
}
?>