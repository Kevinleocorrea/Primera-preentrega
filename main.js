for (let entrada = 1; entrada <= 10; entrada++) {
    let nombre = prompt("ingrese su nombre").toLowerCase();
    let apellido = prompt("ingrese su apellido").toLowerCase();
    
    if (nombre !== "" && apellido !== ""){
        alert(`Hola ${nombre} ${apellido}`);
        }   else {
         alert ("El nombre y el apellido son requeridos para una mejor experiencia")
        }
        
        let edad = parseInt(prompt("Ingrese su edad"));
        if (edad < 16 ){
            alert(`Hola ${nombre} ${apellido}! Puedes ingresar a la sala acompañado de un adulto`);
        }   else if (edad < 18){
            alert(`Hola ${nombre} ${apellido}! Puedes ingresar a la sala con autorizacion`);
        }   else {
            alert(`Hola ${nombre} ${apellido}! Puedes ingresar a la sala`);
        }


    alert(`entrada: #${entrada} Nombre: ${nombre}`)
}