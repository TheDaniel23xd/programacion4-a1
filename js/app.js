
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
      let longitud = {
        "metro":1,
        "centimetro":0.93,
        "kilometro":7.63,
        "milla":24.9,
        "yarda":34.19
    };
    let masa = {
        "kilogramo":1,
        "gramo":0.93,
        "libra":7.63,
        "onza":24.9,
        "miligramo":34.19
    };
    let datos = {
        "byte":8,
        "megabyte":1024,
        "gigabit":7.63,
        "kilobyte":1024,
        "terabyte":34.19
    };
      let $res = document.querySelector("#lblRespuesta");
      $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
  });
});

