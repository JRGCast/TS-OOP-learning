"use strict";
// O ideal em uma interface é que ela seja abrangente, e não apenas para uma única classe, como foi feito na Obj01;
// Inclusive um Design Pattern comum é o Data Access Object - DAO, para persistir dados em um banco de dados;
// Então o Objeto em si gerenciará as regras de negócio, e a interface (Objeto DAO) será responsável pela inscrição e obtenção desses dados;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDAO = exports.ConcessionariaDAO = void 0;
const tsOrientacaoObj01_1 = require("./tsOrientacaoObj01");
// Veja um problema em classes no qual a interface é a solução:
// Criaram-se classes DAO para o manejo de dados:
class ConcessionariaDAOEr {
    constructor() {
        this.nomeTabela = 'tabela';
    }
    inserir() { }
    Atualizar() { }
    getAll() { }
}
class MotoDAOEr {
    constructor() {
        this.tabela = 'Mototable';
    }
    insert() { }
    update() { }
    pegatodos() { }
}
class CarroDAOEr {
    constructor() {
        this.table = 'Cartable';
    }
    insert() { }
    atualizar() { }
    deletar() { }
    pegartodos() { }
}
// Com isso, todos os objetos podem implementar a interface, com os mesmos nomes e sem confusões:
// função de console apenas para facilitar:
const consoleLogueiro = (ordem) => console.log(ordem);
class ConcessionariaDAO {
    constructor() {
        this.nomeTabela = 'ConcessionariaTabela';
    }
    inserir(object) {
        /* Lógica de inserir */
        consoleLogueiro('Lógica de inserir Concessionária');
        return true;
    }
    ;
    atualizar(object) {
        /* Lógica de atualizar */
        consoleLogueiro('Lógica de atualizar Concessionária');
        return true;
    }
    ;
    remover(id) {
        /* Lógica de remoção */
        consoleLogueiro('Lógica de remoção Concessionária');
        return new tsOrientacaoObj01_1.Concessionaria('');
    }
    ;
    selecionarUm(id) {
        /* Lógica de selecionar um */
        consoleLogueiro('Lógica de selecionar um Concessionária');
        return new tsOrientacaoObj01_1.Concessionaria('');
    }
    ;
    selecionarTodos() {
        /* Lógica de selecionar todos */
        consoleLogueiro('Lógica de selecionar todos Concessionária');
        return [];
    }
    ;
}
exports.ConcessionariaDAO = ConcessionariaDAO;
class PessoaDAO {
    constructor() {
        this.nomeTabela = 'PessoaTabela';
    }
    inserir(object) {
        /* Lógica de inserir */
        consoleLogueiro('Lógica de inserir Pessoa');
        return true;
    }
    ;
    atualizar(object) {
        /* Lógica de atualizar */
        consoleLogueiro('Lógica de atualizar Pessoa');
        return true;
    }
    ;
    remover(id) {
        /* Lógica de remoção */
        consoleLogueiro('Lógica de remoção Pessoa');
        return new tsOrientacaoObj01_1.Pessoa('', '');
    }
    ;
    selecionarUm(id) {
        /* Lógica de selecionar um */
        consoleLogueiro('Lógica de selecionar um Pessoa');
        return new tsOrientacaoObj01_1.Pessoa('', '');
    }
    ;
    selecionarTodos() {
        /* Lógica de selecionar todos */
        consoleLogueiro('Lógica de selecionar todos Pessoa');
        return [];
    }
    ;
}
exports.PessoaDAO = PessoaDAO;
// Utilização: 
let concDao = new ConcessionariaDAO();
let conc1 = new tsOrientacaoObj01_1.Concessionaria('Ave');
let persoDao = new PessoaDAO();
let person1 = new tsOrientacaoObj01_1.Pessoa('Joe', 'Carro');
concDao.inserir(conc1);
concDao.atualizar(conc1);
consoleLogueiro('---------------------');
persoDao.inserir(person1);
persoDao.atualizar(person1);
