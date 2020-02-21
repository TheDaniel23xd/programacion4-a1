
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
            cantidad = document.querySelector("#txtCantidadConversor").value,
            opcion = document.getElementById('cboConvertir');
  
        let monedas = {
            "dolar":1,
            "euro":0.93,
            "quetzal":7.63,
            "lempira":24.9,
            "cordoba":34.19},
            longitudes = {
              "mm": 1000,
              "cm": 100,
              "mt": 1,
              "km": 0.001,
              "milla": 0.000621371,
              "yarda":1.09361,
                "pie":3.28084,
                "pulgada":39.3701
            },
              almacenamiento = {
                "bit": 8,
                "byte": 1,
                "kb": 0.001,
                "mb": 0.000001,
                "gb":0.000000001,
                "tb":0.00000000000090949470177},
                peso = {
                  "gramo": 1000,
                  "kg": 1,
                  "libra": 2.20462,
                  "onza": 35.274,
                  "tonelada larga": 0.000984207,
                    "tonelada corta":0.00110231};
  
        let $res = document.querySelector("#lblRespuesta");
        if(opcion.value == "moneda"){
          $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
        } else if(opcion.value == "longitud"){
          $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(4) }`;
        } else if(opcion.value == "almacenamiento"){
          $res.innerHTML = `Respuesta: ${ (almacenamiento[a]/almacenamiento[de]*cantidad) }`;
        } else if(opcion.value == "peso"){
          $res.innerHTML = `Respuesta: ${ (peso[a]/peso[de]*cantidad).toFixed(4) }`;
        };
    });
  });
  
  //llenar los select box 
  function elegir_opcion() {
    let opcion = document.getElementById('cboConvertir'),
    de1 = document.getElementById('cboDe'),
    a1 = document.getElementById('cboA');
    //limpia antes de actualizar
    de1.value="";
    a1.value="";
    de1.innerHTML="";
    a1.innerHTML="";
  
    if(opcion.value == "moneda"){
      var  array = ["dolar!DOLAR","euro!EURO","quetzal!QUETZAL","lempira!LEMPIRA","cordoba!CORDABA"]; 
    } else if(opcion.value == "longitud"){
      var array = ["mm!MILIMETRO","cm!CENTIMETRO","mt!METRO","km!KILOMETRO","milla!MILLA","yarda!YARDA","pie!PIE","pulgada!PULGADA"];
    } else if(opcion.value == "almacenamiento"){
      var array = ["bit!Bit","byte!BYTE","kb!KILOBYTE","mb!MEGABYTE","gb!GIGABYTE","tb!TERABYTE"];
    } else if(opcion.value == "peso"){
      var array = ["gramo!GRAMO","kg!KILOGRAMO","libra!LIBRA","onza!ONZA","tonelada larga!TONELADA LARGA","tonelada corta!TONELADA CORTA"];
    };
  
    for(var i=0;i<array.length;i++){ 
      var repair = array[i].split("!");
      var newop = document.createElement("option");
      newop.value = repair[0]
      newop.innerHTML = repair[1];
      de1.options.add(newop);
    };
    for(var i=0;i<array.length;i++){ 
      var repair = array[i].split("!");
      var newop = document.createElement("option");
      newop.value = repair[0]
      newop.innerHTML = repair[1];
      a1.options.add(newop);
    };
   }