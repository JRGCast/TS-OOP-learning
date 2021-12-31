// A interface parece boa, não? Porém, ainda é possível fazer uma interface genérica, a fim de evitar o 'boilerplate':

import { Concessionaria, Pessoa } from "./tsOrientacaoObj01";

interface DAOInterfaceGeneric<T> { // Logo após a interface, passamos o parâmetro <T>, que é um tipo genérico
  nomeTabela: string;
  inserir(object: T): boolean;
  atualizar(object: T): boolean;
  remover(id: number): T;
  selecionarUm(id: number): T;
  selecionarTodos(): T[];
}

class DAO<T> implements DAOInterfaceGeneric<T> { // daí criamos uma classe genérica, que receberá o tipo <T>, implementando a interface genérica
  nomeTabela: string = 'Tabela';
  inserir(object: T): boolean {
    /* Lógica de inserir */
    console.log('Lógica de inserir', JSON.stringify(object))
    return true
  };
  atualizar(object: T): boolean {
    /* Lógica de atualizar */
    console.log('Lógica de atualizar', JSON.stringify(object))
    return true
  };
  remover(id: number): T {
    /* Lógica de remoção */
    console.log('Lógica de remoção', JSON.stringify(id))
    return Object()
  };
  selecionarUm(id: number): T {
    /* Lógica de selecionar um */
    console.log('Lógica de selecionar um', JSON.stringify(id))
    return Object()
  };
  selecionarTodos(): Array<T> {
    /* Lógica de selecionar todos */
    console.log('Lógica de selecionar todos')
    return []
  };
}

// utilização:
let conce1: Concessionaria = new Concessionaria('')
let pesso1: Pessoa = new Pessoa('Generico Filho', 'Parati')

let concessDaoGeneric: DAO<Concessionaria> = new DAO<Concessionaria>()
let pessoDaoGeneric: DAO<Pessoa> = new DAO<Pessoa>()

concessDaoGeneric.inserir(conce1)
concessDaoGeneric.atualizar(conce1)
console.log('-------------------------')
pessoDaoGeneric.inserir(pesso1)
pessoDaoGeneric.atualizar(pesso1)