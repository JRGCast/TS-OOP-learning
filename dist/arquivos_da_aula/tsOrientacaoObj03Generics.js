"use strict";
// A interface parece boa, não? Porém, ainda é possível fazer uma interface genérica, a fim de evitar o 'boilerplate':
Object.defineProperty(exports, "__esModule", { value: true });
const tsOrientacaoObj01_1 = require("./tsOrientacaoObj01");
class DAO {
    constructor() {
        this.nomeTabela = 'Tabela';
    }
    inserir(object) {
        /* Lógica de inserir */
        console.log('Lógica de inserir', JSON.stringify(object));
        return true;
    }
    ;
    atualizar(object) {
        /* Lógica de atualizar */
        console.log('Lógica de atualizar', JSON.stringify(object));
        return true;
    }
    ;
    remover(id) {
        /* Lógica de remoção */
        console.log('Lógica de remoção', JSON.stringify(id));
        return Object();
    }
    ;
    selecionarUm(id) {
        /* Lógica de selecionar um */
        console.log('Lógica de selecionar um', JSON.stringify(id));
        return Object();
    }
    ;
    selecionarTodos() {
        /* Lógica de selecionar todos */
        console.log('Lógica de selecionar todos');
        return [];
    }
    ;
}
// utilização:
let conce1 = new tsOrientacaoObj01_1.Concessionaria('');
let pesso1 = new tsOrientacaoObj01_1.Pessoa('Generico Filho', 'Parati');
let concessDaoGeneric = new DAO();
let pessoDaoGeneric = new DAO();
concessDaoGeneric.inserir(conce1);
concessDaoGeneric.atualizar(conce1);
console.log('-------------------------');
pessoDaoGeneric.inserir(pesso1);
pessoDaoGeneric.atualizar(pesso1);
