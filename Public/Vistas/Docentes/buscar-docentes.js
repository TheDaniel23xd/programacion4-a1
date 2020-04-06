var appBuscarDocente = new Vue({
    el:'#frm-buscar-docentes',
    data:{
        misdocentes:[],
        valor:''
    },
    methods:{
        buscarDocente:function(){
            fetch(`private/Modulos/docentes/procesosdocente.php?proceso=buscarDocente&docente=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.misdocentes = resp;
            });
        },
        modificarDocente:function(docente){
            appdocente.docente = docente;
            appdocente.docente.accion = 'modificar';
        },
        eliminarDocente:function(idDocente){
            if (confirm("Estas seguro de eliminar este registro?")){
                fetch(`Private/Modulos/docentes/procesosdocente.php?proceso=eliminarDocente&docente=${idDocente}`).then(resp=>resp.json()).then(resp=>{
                    this.buscarDocente();
                });
            }
        }
    },
    created:function(){
        this.buscarDocente();
    }
});