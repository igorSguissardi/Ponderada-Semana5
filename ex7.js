class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        return `O nome dele é ${this.nome} e ele tem ${this.idade}.`
    }
}
const a1 = new Animal("cachorro");
const a2 = new Animal("gato");

a1.idade = "35 anos";
a2.idade = "2 anos";

console.log(a1.descrever() + " " + a2.descrever());
