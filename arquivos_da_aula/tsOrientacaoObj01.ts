// As aulas aprofundam a utilização de classes, não gerando algo estático. O ensinamento está melhor catalogado nos desafios

export class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

// aqui utilizaremos uma ideia errada de implementação de interface, apenas para demonstrar como se usa e seus efeitos;
// na OrientacaoObj02 veremos o jeito correto

interface ConcessionariaInt {
    // uma interface serve como maneira de 'obrigar' a implementação de métodos;
    // para 'obrigar' a implementação de atributos utiliza-se classe abstrata.
    mostrarHorarioFuncionamento(): string
}

// note que ao implementar a interface, mas não colocar o método, o TS reclamará que a implementação está errada:
export class Concessionaria implements ConcessionariaInt {
    private endereco: string
    private listaDeCarros: any //poderá receber qualquer dado

    constructor(endereco: string) {
        this.endereco = endereco
    }

    public mostrarHorarioFuncionamento(): string {
        return 'Das 8h às 19h'
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}

export class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }
    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: any): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }
}
let pessoa = new Pessoa('José', 'Veloster')
console.log(pessoa.dizerCarroPreferido())