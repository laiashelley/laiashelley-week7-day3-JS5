// 1- Dentro de un bucle, ejecutar x veces (x según usuario) una función que te pida saludo (“Hola”, “Adiós”, etc) y nombre (“Marga”, “Carol”, etc ) , y al final te muestre los resultados en pantalla: Hola Marga, Adiós Carol (líneas separadas)

function saludoNombre(){
    let saludo = prompt("Introduce un saludo");
    let nombre = prompt("Introduce un nombre");
    document.write(saludo + " " + nombre + "<hr><hr/>");
}

let cuantasVeces = parseInt(prompt("Introduce cuantas veces quieres pedir un saludo y un nombre"));

for (let i = 0; i < cuantasVeces; i++) {
    saludoNombre();
}