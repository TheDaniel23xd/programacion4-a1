var appBuscarClientes = new Vue({
    el:'#frm-buscar-clientes',
    data:{
        misclientes:[],
        valor:''
    },
    methods:{
        buscarclientes:function(){
            fetch(`private/Modulos/Clientes/procesos.php?proceso=buscarcliente&clientes=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.misclientes = resp;
            });
        },
        modificarClientes:function(Clientes){
            appclientes.Clientes = Clientes;
            appclientes.Clientes.accion = 'modificar';
        },
        eliminarClientes:function(idAlumno){
            if(confirm("Estas seguro de eliminar este registro?")){
                fetch(`private/Modulos/Clientes/procesos.php?proceso=eliminarClientes&clientes=${idCliente}`).then(resp=>resp.json()).then(resp=>{
                    this.buscarAlumno();
                });
            }

        }
    },
    created:function(){
        this.buscarclientes();
    }
});