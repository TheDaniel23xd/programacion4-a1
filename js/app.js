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
            "colones(SV) ":8.75000,
            "Yenes":111.27,
            "Rupia":69.75,
            "Peso(MX)":19.36,
            "Bitcoin":0.00026},
            longitudes = {
              "Metro": 1,
              "cm": 100,
              "Pulgada": 39.3701,
              "Pie": 3.28084,
              "Varas": 1.1963081929167,
              "Yarda":1.09361,
              "Km":0.001,
              "Millas":0.000621371
            };
  
        let $res = document.querySelector("#lblRespuesta");
        if(opcion.value == "moneda"){
          $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
        } else if(opcion.value == "longitud"){
          $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(4) }`;
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
      var  array = ["dolar!DOLAR","colones(SV)!COLONES(SV)","Yenes!YENES","Rupia!RUPIA","Peso(MX)!PESO(MX)","Bitcoin!BITCOIN"]; 
    } else if(opcion.value == "longitud"){
      var array = ["mm!MILIMETRO","cm!CENTIMETRO","mt!METRO","km!KILOMETRO","milla!MILLA","yarda!YARDA","pie!PIE","pulgada!PULGADA"];
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