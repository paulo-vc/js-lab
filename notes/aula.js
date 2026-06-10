/*console.log("Hello World!");
let variavel = 1;
const pi = 3.14;
console.log(pi);
*/
let precoGasolina = 6.35;
let precoEtanol = 4.50;
let gastoMedioKm = 10.3;
let distanciaKm = 300;
const tipoCombustivel = "Gasolina";

if (tipoCombustivel == "Etanol"){
    console.log(((distanciaKm/gastoMedioKm)*precoEtanol).toFixed(2));
}else if (tipoCombustivel == "Gasolina"){
    console.log(((distanciaKm/gastoMedioKm)*precoGasolina).toFixed(2));
}else{
    console.log("Não tem esse combustivel");
}


const verdadeiro = false;
console.log(verdadeiro);
console.log(10<=5);
let numeroQuatro = 4;
let numeroPar = ((numeroQuatro % 2) == '0');
//let numeroPar = ((numero % 2) === '0');
console.log(numeroPar);

const numero = 10;
const numeroTexto = '10';

console.log(numero === numeroTexto)