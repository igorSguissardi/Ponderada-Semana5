class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        return `O nome dele é ${this.nome} e ele tem ${this.idade}.`
    }
}

class Gato extends Animal {
    constructor(cor) {
        super(nome, idade);
        this.cor = cor;
        }
        miar() {
            return "miau";
        }
}
const a1 = new Animal("cachorro");
const a2 = new Gato ("gato");

a1.idade = "35 anos";
a2.idade = "2 anos";
a2.cor = "amarelado";

console.log(a1.descrever() + " " + a2.descrever() + `o gato é ${a2.cor}` + miar())