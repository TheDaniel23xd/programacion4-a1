var appmateria = new Vue({
    el:'#frm-materia',
    data:{
        materia:{
            idMateria  : 0,
            accion    : 'nuevo',
            codigo    : '',
            nombre    : '',
            facultad : '',
            carrera  : '',
            msg       : ''
        }
    },
    methods:{
        guardarMateria:function(){
            fetch(`Private/Modulos/materias/procesoM.php?proceso=recibirDatos&materia=${JSON.stringify(this.materia)}`).then( resp=>resp.json() ).then(resp=>{
                this.materia.msg = resp.msg;
                this.materia.idMateria = 0;
                this.materia.codigo = '';
                this.materia.nombre = '';
                this.materia.facultad = '';
                this.materia.carrera = '';
                this.materia.accion = 'nuevo';
                
            });
        }
    }
});