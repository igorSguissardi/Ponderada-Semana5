class Animal {
    constructor(nome, idade) {
        // this.nome = eu defino a variável nome dentro dessa classe
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        return `O nome dele é ${this.nome} e ele tem ${this.idade}.`
    }
}

class Gato extends Animal {
    constructor(nomeQualquerDaVariavel, idade1, cor) {
        // o super (só super) puxa o constructor da classe herdada,
        // entrega o que o método precisa, independendo de como você chama os parâmetros
        // Parâmetros são definidos fora da função;
        super(nomeQualquerDaVariavel, idade1);
        this.cor = cor;
        }
        // a única diferença entre a função e o método é que a função está dentro da classe;
        miar() {
            return "miau";
        }
}
// Os parâmetros criados pelo construtor terão que vir de fora
const a1 = new Animal("cachorro", "35 anos" );
const a2 = new Gato ("gato", "2 anos", "Alaranjado"); 

console.log(a1.descrever() + " " + a2.descrever() + `o gato é ${a2.cor}` + " " + a2.miar())