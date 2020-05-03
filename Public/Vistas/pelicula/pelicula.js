var apppelicula = new Vue({
    el:'#frm-pelicula',
    data:{
        pelicula:{
            idpelicula  : 0,
            accion      : 'nuevo',
            descripcion        : '',
            sinopsis    : '',
            genero      : '',
            duracion    : '',
            msg         : ''
        }
    },
    methods:{
        guardarpelicula:function(){
            fetch(`Private/Modulos/pelicula/procesos.php?proceso=recibirDatos&pelicula=${JSON.stringify(this.pelicula)}`).then( resp=>resp.json() ).then(resp=>{
                this.pelicula.msg = resp.msg;
            
                
            });
        },
        limpiarpelicula(){
            this.pelicula.idpelicula = 0;
            this.pelicula.descripcion = '';
            this.pelicula.sinopsis = '';
            this.pelicula.genero = '';
            this.pelicula.duracion = '';
            this.pelicula.accion = 'nuevo';
        }
    }
});