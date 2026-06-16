class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    //construtor

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2026 - idade;
    }

    // métodos não precisam ter a palavra function
    descrever(){
        console.log(`Meu nome: ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}

const dev = {nome: 'Paulo', linguagemPreferida: 'JavaScript'};
console.log(dev.linguagemPreferida);

const paulo = new Pessoa('Paulo', 23);
const borges = new Pessoa('Borges', 21);

compararPessoas(paulo, borges);

new Pessoa('Renan', 30).descrever();

console.log(paulo);

paulo.nome = "Paulo Vinicius";
paulo.idade = 23;

console.log(paulo);