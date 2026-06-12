class Pessoa {
    nome;
    idade;

    // métodos não precisam ter a palavra function
    descrever(){
        console.log(`Meu nome: ${this.nome} e minha idade é ${this.idade}`);
    }
}

const paulo = new Pessoa();

console.log(paulo);

paulo.nome = "Paulo Vinicius";
paulo.idade = 22;

console.log(paulo);