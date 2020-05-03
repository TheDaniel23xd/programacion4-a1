var appBuscarpelicula = new Vue({
    el:'#frm-buscar-pelicula',
    data:{
        mispelicula:[],
        valor:''
    },
    methods:{
        buscarpelicula:function(){
            fetch(`Private/Modulos/pelicula/procesos.php?proceso=buscarpelicula&pelicula=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.mispelicula = resp;
            });
        },
        modificarpelicula:function(pelicula){
            apppelicula.pelicula = pelicula;
            apppelicula.pelicula.accion = 'modificar';
            
            
        },
        eliminarpelicula:function(idpelicula){
            if(confirm("Estas seguro de eliminar este registro?")){
                fetch(`Private/Modulos/pelicula/procesos.php?proceso=eliminarpelicula&pelicula=${idpelicula}`).then(resp=>resp.json()).then(resp=>{
                    this.buscarpelicula();
                });
            }
           
        }
    },
    created:function(){
        this.buscarpelicula();
    }
});