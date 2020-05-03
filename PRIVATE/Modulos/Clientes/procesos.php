<?php 
include('../../Config/Config.php');
$cliente = new cliente($Conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$cliente->$proceso( $_GET['cliente'] );
print_r(json_encode($cliente->respuesta));

class cliente{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($cliente){
        $this->datos = json_decode($cliente, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['nombre']) ){
            $this->respuesta['msg'] = 'por favor ingrese el nombre del cliente';
        }
        if( empty($this->datos['direccion']) ){
            $this->respuesta['msg'] = 'por favor ingrese el direccion del cliente';
        }
        if( empty($this->datos['telefono']) ){
            $this->respuesta['msg'] = 'por favor ingrese la telefono del cliente';
        }
        if( empty($this->datos['dui']) ){
            $this->respuesta['msg'] = 'por favor ingrese la dui del cliente';
        }
        $this->almacenar_cliente();
    }
    private function almacenar_cliente(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO cliente (nombre,direccion,telefono,dui) VALUES(
                        "'. $this->datos['nombre'] .'",
                        "'. $this->datos['direccion'] .'",
                        "'. $this->datos['telefono'] .'",
                        "'. $this->datos['dui'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
            } else if( $this->datos['accion']==='modificar' ){
                $this->db->consultas('
                   UPDATE cliente SET
                        nombre        = "'. $this->datos['nombre'] .'",
                        direccion     = "'. $this->datos['direccion'] .'",
                        telefono      = "'. $this->datos['telefono'] .'",
                        dui           = "'. $this->datos['dui'] .'"
                    WHERE idcliente = "'. $this->datos['idcliente'] .'"
                ');
                $this->respuesta['msg'] = 'Registro actualizado correctamente';
            }
        }
    }
    public function buscarCliente($valor=''){
        $this->db->consultas('
            SELECT cliente.idcliente, cliente.nombre, cliente.direccion, cliente.telefono, cliente.dui
            FROM cliente
            WHERE cliente.nombre like "%'.$valor.'%" or cliente.telefono like "%'.$valor.'%" or cliente.dui like "%'.$valor.'%"
        ');
        return $this->respuesta = $this->db->obtener_datos();
    }
    public function eliminarcliente($idcliente=''){
        $this->db->consultas('
            delete cliente
            from cliente
            where cliente.idcliente = "'.$idcliente.'"
        ');
        $this->respuesta['msg'] = 'Registro eliminado correctamente';
    }
}
?>