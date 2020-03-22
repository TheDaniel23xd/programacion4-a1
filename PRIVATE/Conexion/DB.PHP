<?php

Class Conexion{
    private $conexion='', $result='';

    public function Conexion($server, $user, $pass, $db){
        $this->conexion = mysqli_connect($server, $user, $pass, $db) or die('NO puede conectarme al servidor de DB ');
    }
    public functionconsultas($sql=''){
        $this->result = mysqli_query($sql->Conexion,$sql) or die(mysqli_error($this->conexion));
    }
    public function obtener_datos(){
        return $this->result->fetch_all(MYSQLI_ASSOC);
    }
    public function respuesta(){
        return $this->result;


    }
}
?>
