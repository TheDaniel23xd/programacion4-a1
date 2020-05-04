var appcliente = new Vue({
    el:'#frm-cliente',
    data:{
        cliente:{
            idcliente  : 0,
            accion    : 'nuevo',
            nombre    : '',
            direccion : '',
			telefono  : '',
			dui		  :'',
            msg       : ''
        }
    },
    methods:{
        guardarcliente:function(){
            fetch(`private/Modulos/cliente/procesos.php?proceso=recibirDatos&cliente=${JSON.stringify(this.cliente)}`).then( resp=>resp.json() ).then(resp=>{
                this.cliente.msg = resp.msg;
                
              
            });
        },
        limpiarcliente(){
            this.cliente.idcliente = 0;
                this.cliente.nombre = '';
                this.cliente.direccion = '';
				this.cliente.telefono = '';
				this.cliente.dui='';
                this.cliente.accion = 'nuevo';
        }
    }
});