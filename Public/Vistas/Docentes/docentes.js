var appdocente = new Vue({
    el:'#frm-docente',
    data:{
        docente:{
            idDocente  : 0,
            accion    : 'nuevo',
            codigo    : '',
            nombre    : '',
            direccion : '',
            telefono  : '',
            nit       : '',
            msg       : ''
        }
    },
    methods:{
        guardarDocente:function(){
            fetch(`Private/Modulos/docentes/procesosdocente.php?proceso=recibirDatos&docente=${JSON.stringify(this.docente)}`).then( resp=>resp.json() ).then(resp=>{
                this.docente.msg = resp.msg;
                this.docente.idDocente = 0;
                this.docente.codigo = '';
                this.docente.nombre = '';
                this.docente.direccion = '';
                this.docente.telefono = '';
                this.docente.nit='';
                this.docente.accion = 'nuevo';
                
            });
        }
    }
});