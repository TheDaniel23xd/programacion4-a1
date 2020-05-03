<?php
include('../../Config/Config.php');
$alquiler = new alquiler($Conexion  );

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$alquiler->$proceso( $_GET['alquiler'] );
print_r(json_encode($alquiler->respuesta));

class alquiler{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($alquiler){
        $this->datos = json_decode($alquiler, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['cliente']['id']) ){
            $this->respuesta['msg'] = 'por favor ingrese el cliente del alquiler';
        }
        if( empty($this->datos['pelicula']['id']) ){
            $this->respuesta['msg'] = 'por favor ingrese el pelicula';
        }
        $this->almacenar_alquiler();
    }
    private function almacenar_alquiler(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO alquiler (idcliente,idpelicula,fechaprestamo,fechadevolucion,valor) VALUES(
                        "'. $this->datos['cliente']['id'] .'",
                        "'. $this->datos['pelicula']['id'] .'",
                        "'. $this->datos['fechaP'] .'",
                        "'. $this->datos['fechaD'] .'",
                        "'. $this->datos['valor'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
            } else if( $this->datos['accion']==='modificar' ){
                $this->db->consultas('
                    UPDATE alquiler SET
                        idcliente              = "'. $this->datos['cliente']['id'] .'",
                        idpelicula             = "'. $this->datos['pelicula']['id'] .'",
                        fechaprestamo          = "'. $this->datos['fechaP'] .'",
                        fechadevolucion        = "'. $this->datos['fechaD'] .'",
                        valor                  = "'. $this->datos['valor'] .'"
                    WHERE idalquiler           = "'. $this->datos['idalquiler'] .'"
                ');
                $this->respuesta['msg'] = 'Registro actualizado correctamente';
            }
        }
    }
    public function buscaralquiler($valor = ''){
        if( substr_count($valor, '-')===2 ){
            $valor = implode('-', array_reverse(explode('-',$valor)));
        }
        $this->db->consultas('
        SELECT alquiler.idalquiler,alquiler.idcliente,alquiler.idpelicula,
        alquiler.fechaprestamo,alquiler.fechadevolucion,peliculas.descripcion,cliente.nombre,alquiler.valor from alquiler JOIN peliculas ON(peliculas.idpelicula=alquiler.idpelicula) JOIN cliente ON(cliente.idcliente=alquiler.idcliente)
            WHERE peliculas.descripcion like "%'. $valor .'%" or 
                cliente.nombre like "%'. $valor .'%" or 
                alquiler.valor like "%'. $valor .'%" 
        ');
        $alquiler = $this->respuesta = $this->db->obtener_datos();
        foreach ($alquiler as $key => $value) {
            $datos[] = [
                'idalquiler' => $value['idalquiler'],
                'cliente'      => [
                    'id'      => $value['idcliente'],
                    'label'   => $value['nombre']
                ],
                'peliculas'    => [
                    'id'      => $value['idpelicula'],
                    'label'   => $value['descripcion']
                ],
                'fechaP'        => $value['fechaprestamo'],
                'fechaD'        => $value['fechadevolucion'],
                'valor'         =>$value['valor']

            ]; 
        }
        return $this->respuesta = $datos;
    }
    public function traer_cliente_pelicula(){
        $this->db->consultas('
            select cliente.nombre AS label, cliente.idcliente AS id
            from cliente
        ');
        $cliente = $this->db->obtener_datos();
        $this->db->consultas('
            select peliculas.descripcion AS label, peliculas.idpelicula AS id
            from peliculas
        ');
        $pelicula = $this->db->obtener_datos();
        return $this->respuesta = ['clientes'=>$cliente, 'peliculas'=>$pelicula ];//array de php en v7+
    }
    public function eliminaralquiler($idalquiler = 0){
        $this->db->consultas('
            DELETE alquiler
            FROM alquiler
            WHERE alquiler.idalquiler="'.$idalquiler.'"
        ');
        return $this->respuesta['msg'] = 'Registro eliminado correctamente';
    }
}
?>