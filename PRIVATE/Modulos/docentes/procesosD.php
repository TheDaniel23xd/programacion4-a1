<? php 
include ( '../../Config/Config.php' );
$ docente = nuevo docente ( $ Conexion );

$ proceso = '' ;
if ( isset ( $ _GET [ 'proceso' ]) && strlen ( $ _GET [ 'proceso' ])> 0 ) {
	$ proceso = $ _GET [ 'proceso' ];
}
$ docente -> $ proceso ( $ _GET [ 'docente' ]);
print_r ( json_encode ( $ docente -> respuesta ));

clase docente {
    privado  $ datos = array (), $ db ;
    public  $ respuesta = [ 'msg' => 'correcto' ];
    
     función  pública __construct ( $ db ) {
        $ this -> db = $ db ;
    }
     función  pública recibirDatos ( $ docente ) {
        $ this -> datos = json_decode ( $ docente , verdadero );
        $ this -> validar_datos ();
    }
     función  privada validar_datos () {
        if ( empty ( $ this -> datos [ 'codigo' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese el codigo del Docente' ;
        }
        if ( empty ( $ this -> datos [ 'nombre' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese el nombre del Docente' ;
        }
        if ( empty ( $ this -> datos [ 'direccion' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese la direccion del Docente' ;
        }
       
        $ this -> almacen_docente ();
    }
     función  privada almacena_docente () {
        if ( $ this -> respuesta [ 'msg' ] === 'correcto' ) {
            if ( $ this -> datos [ 'accion' ] === 'nuevo' ) {
                $ this -> db -> consultas ( '
                    INSERTAR EN docentes (codigo, nombre, direccion, telefono, nit) VALORES (
                        "' . $ this -> datos [ ' codigo ' ]. '",
                        "' . $ this -> datos [ ' nombre ' ]. '",
                        "' . $ this -> datos [ ' direccion ' ]. '",
                        "' . $ this -> datos [ ' telefono ' ]. '",
                        "' . $ this -> datos [ ' nit ' ]. '"
                    )
                ' );
                $ this -> respuesta [ 'msg' ] = 'Registro insertado correctamente' ;
            } else  if ( $ this -> datos [ 'accion' ] === 'modificar' ) {
                $ this -> db -> consultas ( '
                   ACTUALIZAR docentes SET
                        codigo = "' . $ this -> datos [ ' codigo ' ]. '",
                        nombre = "' . $ this -> datos [ ' nombre ' ]. '",
                        direccion = "' . $ this -> datos [ ' direccion ' ]. '",
                        telefono = "' . $ this -> datos [ ' telefono ' ]. '",
                         nit = "' . $ this -> datos [ ' nit ' ]. '"
                    DONDE idDocente = " ' $ este -> Datos [ 'idDocente' ]. '"
                ' );
                $ this -> respuesta [ 'msg' ] = 'Registro actualizado correctamente' ;
            }
        }
    }
     función  pública buscarDocente ( $ valor = '' ) {
        $ this -> db -> consultas ( '
            seleccione docentes.idDocente, docentes.codigo, docentes.nombre, docentes.direccion, docentes.telefono, docentes.nit
            de docentes
            donde docentes.codigo como "% ' . $ valor . '%" o docentes.nombre como "% ' . $ valor . '%" o docentes.nit como "% ' . $ valor . '%"
        ' );
        devuelve  $ this -> respuesta = $ this -> db -> obtener_datos ();
    }
     función  pública eliminarDocente ( $ idDoncente = '' ) {
    
            $ this -> db -> consultas ( '
                eliminar docentes
                de docentes
                donde docentes.idDocente = "' . $ idDoncente . '"
            ' );
           
                $ this -> respuesta [ 'msg' ] = 'Registro eliminado correctamente' ;
      
    }
 
    
}
?>