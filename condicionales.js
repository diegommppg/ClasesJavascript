//Boolean
let verdadero = true;
let falso = false;

//Operadores condicionales
// == (igual)
// != (distinto)
// > (mayor que)
// < (menor que)
// >= (mayor o igual que)
// <= (menor o igual que)

//let comparacion = 10 > 5; //true
let numero1 = 10;
let numero2 = 10;

let comparacion2 = numero1 > numero2;
console.log("¿Es 10 mayor que 5? " + comparacion2);

let comparacion3 = numero1 >= numero2;
console.log("¿Es 10 mayor o igual que 5? " + comparacion3);


let n1 = 3;
let n2 = "3";

let resultado = (n1 == n2);
console.log("¿Es 3 igual que 3? " + resultado);

let resultado2 = (n1 === n2);
console.log("¿Es 3 igual que 3 y del mismo tipo? " + resultado2);


//Condicional: if
let edad = 17;
if (edad >= 18) {
    console.log("Puedes entrar al bar");
    console.log("Puedes comprar alcohol");
} else{
    console.log("No puedes entrar al bar");
} 


//Temperatura

//Si la tempertatura es mayor o igual a 25 grados, me voy a la playa
//Si la tempertatura es menor a 25 grados, me voy a la montaña 

//Operadores logicos
// && (y) AND
// || (o) OR
// ! (no) NOT

let temperatura = 15;

if(temperatura > 25 && temperatura <30){
    console.log("Me voy a la playa");
}

if(temperatura < 10 || temperatura == 15){
    console.log("Me compro un abrigo");
}

if(!(temperatura == 0 || temperatura > 15)){
    console.log("Me voy a la montaña");
}



console.log(0 == "0");     // true → convierte ambos al mismo tipo
console.log(0 === "0");    // false → compara tipo y valor estrictamente

console.log("5" + 3);      // "53" → concatena porque hay una cadena

let r2 = "2" + 2;
console.log('"2" + 2 =', r2); // "22" también

let r3 = 2 + 2 + "2";



console.log('2 + 2 + "2" =', r3); // "42" - primero suma números, luego concatena

let resultado4 = "2" + 2 + 2;
console.log('"2" + 2 + 2 =', resultado4); // "222" - todo se convierte a string


console.log('10 * "5" =', 10 * "5"); // 50
console.log('10 / "2" =', 10 / "2"); // 5


console.log("5" - 5);      // 0 → resta convierte la cadena en número

console.log("10" < "2");   // true → compara texto, no números