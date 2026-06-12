function teste(){
    console.log("teste");
}

function obterNumero(numero){
    return numero;
}

function somarDoisNumeros(num){
    let calculo = obterNumero(3);
    return calculo += num; 
}



(function main(){
    console.log("Main");
    let numero = 5;
    console.log(obterNumero(numero))
    teste();
})(); //funcao imediatamente invocada, cria e se executa

console.log(somarDoisNumeros(3));

