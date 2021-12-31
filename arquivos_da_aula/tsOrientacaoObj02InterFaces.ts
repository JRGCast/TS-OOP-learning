// O ideal em uma interface é que ela seja abrangente, e não apenas para uma única classe, como foi feito na Obj01;
// Inclusive um Design Pattern comum é o Data Access Object - DAO, para persistir dados em um banco de dados;
// Então o Objeto em si gerenciará as regras de negócio, e a interface (Objeto DAO) será responsável pela inscrição e obtenção desses dados;

import { Concessionaria, Pessoa } from "./tsOrientacaoObj01";

// Veja um problema em classes no qual a interface é a solução:
// Criaram-se classes DAO para o manejo de dados:
class ConcessionariaDAOEr {
  nomeTabela: string = 'tabela';
  public inserir() { }
  public Atualizar() { }
  public getAll() { }
}
class MotoDAOEr {
  tabela: string = 'Mototable';
  public insert() { }
  public update() { }
  public pegatodos() { }
}
class CarroDAOEr {
  table: string = 'Cartable';
  public insert() { }
  public atualizar() { }
  public deletar() { }
  public pegartodos() { }
}
// note que um mesmo objetivo encontra problemas (por exemplo em uma classe é inserir, em outra é insert), além de a classe CarroDAO possuir o método 'deletar', que os outros não possuem.
// Veja que o objetivo é o mesmo: manejo de dados no banco de dados, e aí que a interface entra em ação, pois, torna a implementação dos métodos homogênea:
// * atenção: a Interface NÃO IMPLEMENTA LÓGICA, apenas define o que precisará ser implementado
export interface DAOInterface {
  nomeTabela: string;
  inserir(object: any): boolean;
  atualizar(object: any): boolean;
  remover(id: number): any;
  selecionarUm(id: number): any;
  selecionarTodos(): Array<any>;
}

// Com isso, todos os objetos podem implementar a interface, com os mesmos nomes e sem confusões:
// função de console apenas para facilitar:
const consoleLogueiro = (ordem: string): void => console.log(ordem);
export class ConcessionariaDAO implements DAOInterface {
  nomeTabela: string = 'ConcessionariaTabela';
  public inserir(object: Concessionaria): boolean {
    /* Lógica de inserir */
    consoleLogueiro('Lógica de inserir Concessionária')
    return true
  };
  atualizar(object: Concessionaria): boolean {
    /* Lógica de atualizar */
    consoleLogueiro('Lógica de atualizar Concessionária')
    return true
  };
  remover(id: number): any {
    /* Lógica de remoção */
    consoleLogueiro('Lógica de remoção Concessionária')
    return new Concessionaria('')
  };
  selecionarUm(id: number): any {
    /* Lógica de selecionar um */
    consoleLogueiro('Lógica de selecionar um Concessionária')
    return new Concessionaria('')
  };
  selecionarTodos(): Array<any> {
    /* Lógica de selecionar todos */
    consoleLogueiro('Lógica de selecionar todos Concessionária')
    return []
  };
}

export class PessoaDAO implements DAOInterface {
  nomeTabela: string = 'PessoaTabela';
  public inserir(object: Pessoa): boolean {
    /* Lógica de inserir */
    consoleLogueiro('Lógica de inserir Pessoa')
    return true
  };
  atualizar(object: Pessoa): boolean {
    /* Lógica de atualizar */
    consoleLogueiro('Lógica de atualizar Pessoa')
    return true
  };
  remover(id: number): any {
    /* Lógica de remoção */
    consoleLogueiro('Lógica de remoção Pessoa')
    return new Pessoa('', '')
  };
  selecionarUm(id: number): any {
    /* Lógica de selecionar um */
    consoleLogueiro('Lógica de selecionar um Pessoa')
    return new Pessoa('', '')
  };
  selecionarTodos(): Array<any> {
    /* Lógica de selecionar todos */
    consoleLogueiro('Lógica de selecionar todos Pessoa')
    return []
  };
}

// Utilização: 
let concDao: ConcessionariaDAO = new ConcessionariaDAO();
let conc1: Concessionaria = new Concessionaria('Ave');

let persoDao: PessoaDAO = new PessoaDAO();
let person1: Pessoa = new Pessoa('Joe', 'Carro')

concDao.inserir(conc1)
concDao.atualizar(conc1)
consoleLogueiro('---------------------')
persoDao.inserir(person1)
persoDao.atualizar(person1)