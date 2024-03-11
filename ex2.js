// 2) Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar().
class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }
}

class Carro extends Veiculo {
    ligar() {
        console.log("Carro ligado!");
    }
}
...
Carro.ligar();

//a resposta correta para ser inserida nos três pontos é a A)