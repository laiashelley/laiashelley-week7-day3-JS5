// // 2- Pide dos números. Pide si quiere sumar o restar (+/-). Según el caso, llama a la función sumar() o restar() pasándole esos parametros y muestra el resultado de sumar o restar ambos números. Prueba a realizar esto sin return
// +EXTRA: prueba a realizar lo mismo con return

let numero1 = parseInt(prompt("Dime un numero"));
let numero2 = parseInt(prompt("Dime otro numero"));
let operacion = prompt("Quieres sumar o restar? Introduce + si quieres sumar, introduce - si quieres restar");
let total;


function sumar (){
   total = numero1 + numero2;
}

function restar (){
   total = numero1 - numero2;
}

if (operacion == "+") {
    sumar();
} else if (operacion == "-"){
    restar();
} else {
    document.write("Por favor, introduce un valor correcto.")
}

document.write("El resultado es: " + numero1 + operacion + numero2 + "=" + total);