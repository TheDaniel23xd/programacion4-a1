<? php 
include ( '../../Config/Config.php' );
$ materia = nueva materia ( $ Conexion );

$ proceso = '' ;
if ( isset ( $ _GET [ 'proceso' ]) && strlen ( $ _GET [ 'proceso' ])> 0 ) {
	$ proceso = $ _GET [ 'proceso' ];
}
$ materia -> $ proceso ( $ _GET [ 'materia' ]);
print_r ( json_encode ( $ materia -> respuesta ));

materia de clase {
    privado  $ datos = array (), $ db ;
    public  $ respuesta = [ 'msg' => 'correcto' ];
    
     función  pública __construct ( $ db ) {
        $ this -> db = $ db ;
    }
     función  pública recibirDatos ( $ materia ) {
        $ this -> datos = json_decode ( $ materia , verdadero );
        $ this -> validar_datos ();
    }
     función  privada validar_datos () {
        if ( empty ( $ this -> datos [ 'codigo' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese el codigo de la materia' ;
        }
        if ( empty ( $ this -> datos [ 'nombre' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese el nombre de la materia' ;
        }
        if ( empty ( $ this -> datos [ 'facultad' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese la facultad de la materia' ;
		}
		if ( empty ( $ this -> datos [ 'carrera' ])) {
            $ this -> respuesta [ 'msg' ] = 'por favor ingrese la carrera de la materia' ;
        }
        $ this -> almacen_materia ();
    }
     función  privada almacena_materia () {
        if ( $ this -> respuesta [ 'msg' ] === 'correcto' ) {
            if ( $ this -> datos [ 'accion' ] === 'nuevo' ) {
                $ this -> db -> consultas ( '
                    INSERTAR EN MATERIALES (codigo, nombre, facultad, carrera) VALORES (
                        "' . $ this -> datos [ ' codigo ' ]. '",
                        "' . $ this -> datos [ ' nombre ' ]. '",
                        "' . $ this -> datos [ ' facultad ' ]. '",
                        "' . $ this -> datos [ ' carrera ' ]. '"
                    )
                ' );
                $ this -> respuesta [ 'msg' ] = 'Registro insertado correctamente' ;
            } else  if ( $ this -> datos [ 'accion' ] === 'modificar' ) {
                $ this -> db -> consultas ( '
                   ACTUALIZAR conjunto de materiales
                        codigo = "' . $ this -> datos [ ' codigo ' ]. '",
                        nombre = "' . $ this -> datos [ ' nombre ' ]. '",
                        facultad = "' . $ this -> datos [ ' facultad ' ]. '",
                        carrera = "' . $ this -> datos [ ' carrera ' ]. '"
                    DONDE idMateria = " ' $ este -> Datos [ 'idMateria' ]. '"
                ' );
                $ this -> respuesta [ 'msg' ] = 'Registro actualizado correctamente' ;
            }
        }
    }
     función  pública buscarMateria ( $ valor = '' ) {
        $ this -> db -> consultas ( '
            seleccione materias.idMateria, materias.codigo, materias.nombre, materias.facultad, materias.carrera
            de materias
            donde materias.codigo como "% ' . $ valor . '%" o materias.nombre como "% ' . $ valor . '%" o materias.facultad como "% ' . $ valor . '%" o materias.carrera como "% ' . $ valor . '%"
        ' );
        devuelve  $ this -> respuesta = $ this -> db -> obtener_datos ();
    }
     función  pública eliminarMateria ( $ idMateria = '' ) {
        $ this -> db -> consultas ( '
            eliminar materias
            de materias
            donde materias.idMateria = "' . $ idMateria . '"
        ' );
        $ this -> respuesta [ 'msg' ] = 'Registro eliminado correctamente' ;
    }
}
?>