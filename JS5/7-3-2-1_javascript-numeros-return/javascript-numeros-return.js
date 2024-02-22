// // 2- Pide dos números. Pide si quiere sumar o restar (+/-). Según el caso, llama a la función sumar() o restar() pasándole esos parametros y muestra el resultado de sumar o restar ambos números. Prueba a realizar esto sin return
// +EXTRA: prueba a realizar lo mismo con return



function sumar (num1, num2){
   return num1 + num2;
}


function restar (num1, num2){
   return num1 - num2;
}


let numero1 = parseFloat(prompt("Dime un numero"));
let numero2 = parseFloat(prompt("Dime otro numero"));


let operacion = prompt("Quieres sumar o restar? Introduce + si quieres sumar, introduce - si quieres restar");


let total;


if (operacion === "+") {
    total = sumar(numero1, numero2);
    document.write("El resultado es: " + total);
} else if (operacion === "-"){
    total = restar(numero1, numero2);
    document.write("El resultado es: " + total);
} else {
    document.write("Por favor, introduce un valor correcto.")
}