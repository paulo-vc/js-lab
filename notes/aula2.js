function teste(){
    console.log("teste");
}

function obterNumero(numero){
    return numero;
}

(function main(){
    console.log("Main");
    let numero = 5;
    console.log(obterNumero(numero))
    teste();
})(); //funcao imediatamente invocada, cria e se executa