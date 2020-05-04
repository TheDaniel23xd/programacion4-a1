var appBuscarCliente = new Vue({
    el:'#frm-buscar-cliente',
    data:{
        miscliente:[],
        valor:''
    },
    methods:{
        buscarCliente:function(){
            fetch(`private/Modulos/cliente/procesos.php?proceso=buscarCliente&cliente=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.miscliente = resp;
            });
        },
        modificarCliente:function(cliente){
            appcliente.cliente = cliente;
            appcliente.cliente.accion = 'modificar';
        },
        eliminarCliente:function(idcliente){
            if(confirm("Estas seguro de eliminar este registro?")){
                fetch(`private/Modulos/cliente/procesos.php?proceso=eliminarcliente&cliente=${idcliente}`).then(resp=>resp.json()).then(resp=>{
                    this.buscarCliente();
                });
            }

        }
    },
    created:function(){
        this.buscarCliente();
    }
});