var $ = el => document.querySelector(el);
document.addEventListener("DOMContentLoaded",event=>{
    let mostrarVista = $("[class*='mostrar-alumnos']"),
     mostrardocente= $("[class*='mostrar-docentes']");
    mostrarVista.addEventListener('click',e=>{
        console.log(mostrarVista);
        
        e.stopPropagation();

        let modulo = e.target.dataset.modulo;
        console.log(modulo);
        fetch('/Public/Vistas/Alumnos/alumnos.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;
          
            
            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click",event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
                script = document.createElement("script");
            script.src = `/Public/Vistas/Alumnos/${modulo}.js`;
            cuerpo.appendChild(script);
        });
       
    });
    mostrardocente.addEventListener('click',e=>{
        e.stopPropagation();
        let modulo = e.target.dataset.modulo;
        console.log(modulo);
        fetch('/Public/Vistas/Profesores/profesores.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;
          
            
            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click",event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
                script = document.createElement("script");
            script.src = `/Public/Vistas/Profesores/${modulo}.js`;
            cuerpo.appendChild(script);
        });

    });
});