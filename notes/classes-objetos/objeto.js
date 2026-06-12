const cadastro = {
    nome: 'Paulo',
    idade: 22,
    id: 123,

    descrever: function(){
        console.log(`Nome cadastrado: ${this.nome} \nIdade: ${this.idade}\nID: ${this.id}`);
    }
};
// this assume o objeto, é usada somente dentro do objeto para assumir ele

console.log(cadastro.nome);

cadastro.cpf = 123456789;

console.log(cadastro.cpf);

delete cadastro.cpf;

console.log(cadastro.cpf);

cadastro.nome='Carlos';
cadastro.descrever();

//sobrescrever função
cadastro.descrever = function(){
    console.log("Função apagada");
}

cadastro.descrever();

//outra maneira de acessar o valor
const atributo = 'nome';

console.log(cadastro[atributo]);

cadastro['idade'] = 34;
cadastro.idade = 34;