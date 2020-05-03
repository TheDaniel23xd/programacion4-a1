var appBuscarAlquiler = new Vue({
    el:'#frm-buscar-alquiler',
    data:{
        misalquiler:[],
        valor:''
    },
    methods:{
        buscarAlquiler:function(){
            fetch(`private/Modulos/alquiler/procesos.php?proceso=buscaralquiler&alquiler=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.misalquiler = resp;
               
                
            });
        },
        modificarAlquiler:function(alquiler){
            appalquiler.alquiler = alquiler;
            appalquiler.alquiler.accion = 'modificar';
        },
        eliminarAlquiler:function(idalquiler){
            if (confirm("Estas seguro de eliminar este registro?")){
                fetch(`Private/Modulos/alquiler/procesos.php?proceso=eliminaralquiler&alquiler=${idalquiler}`).then(resp=>resp.json()).then(resp=>{
                    this.buscarAlquiler();
                });
            }
           
        }
    },
    created:function(){
        this.buscarAlquiler();
    }
});