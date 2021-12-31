"use strict";
// As aulas aprofundam a utilização de classes, não gerando algo estático. O ensinamento está melhor catalogado nos desafios
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = exports.Concessionaria = exports.Carro = void 0;
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.Carro = Carro;
// note que ao implementar a interface, mas não colocar o método, o TS reclamará que a implementação está errada:
class Concessionaria {
    constructor(endereco) {
        this.endereco = endereco;
    }
    mostrarHorarioFuncionamento() {
        return 'Das 8h às 19h';
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
exports.Concessionaria = Concessionaria;
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
exports.Pessoa = Pessoa;
let pessoa = new Pessoa('José', 'Veloster');
console.log(pessoa.dizerCarroPreferido());
