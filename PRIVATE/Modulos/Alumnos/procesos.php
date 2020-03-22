<?php 
include('/Private/Config/config.php');
$alumno = new alumno($conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])> 0 ){
	$proceso = $_GET['proceso'];
}

$alumno->$proceso( $_GET['alumno'] );
print_r(json_encode($alumno->resp));



class alumno{
    private $datos = array(), $db;
    public $resp= ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($alumno){
        $this->datos = json_decode($alumno, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['codigo']) ){
            $this->resp['msg'] = 'por favor ingrese el codigo del estudiante';
        }
        if( empty($this->datos['nombre']) ){
            $this->resp['msg'] = 'por favor ingrese el nombre del estudiante';
        }
        if( empty($this->datos['direccion']) ){
            $this->resp['msg'] = 'por favor ingrese la direccion del estudiante';
        }
    
        $this->almacenar_alumno();
    }
    private function almacenar_alumno(){
        if( $this->resp['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO alumno (codigo,nombre,direccion,telefono) VALUES(
                        "'. $this->datos['codigo'] .'",
                        "'. $this->datos['nombre'] .'",
                        "'. $this->datos['direccion'] .'",
                        "'. $this->datos['telefono'] .'"
                    )
                ');
                $this->resp['msg'] = 'Registro insertado correctamente';
            }
        }
    }
}
?>