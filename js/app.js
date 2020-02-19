
/*document.addEventListener("DOMContentLoaded",init);*/

/*document.addEventListener("DOMContentLoaded",function(event){
    alert("Pagina cargo forma 2");
});*/

/*function init(event){
    alert("Hola la pagina a cargado");
}*/

document.addEventListener("DOMContentLoaded", e=>{
  const form = document.querySelector("#frmConversores");
  form.addEventListener("submit", event=>{
      event.preventDefault();

      let de = document.querySelector("#cboDe").value,
          a = document.querySelector("#cboA").value,
          cantidad = document.querySelector("#txtCantidadConversor").value;
      console.log(de, a, cantidad);
      let monedas = {
          "dolar":1,
          "euro":0.93,
          "quetzal":7.63,
          "lempira":24.9,
          "cordoba":34.19
      };
      let $res = document.querySelector("#lblRespuesta");
      $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
  });
});