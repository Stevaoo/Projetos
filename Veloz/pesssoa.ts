import { log } from "console";
import { Ipessoa } from "./interfaces";

class Pessoa implements Ipessoa {
    nome: string;
    sobrenome: string;
    nome_do_pai: string;
    nome_da_mae: string;
    numero_rg: number;
    numero_cpf: number;
    data_de_nascimento: number;

    constructor(nome: string, sobrenome: string, nome_do_pai: string, nome_da_mae: string, numero_rg: number, numero_cpf: number, data_de_nascimento: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome_da_mae = nome_da_mae;
        this.nome_do_pai = nome_do_pai;
        this.numero_rg = numero_rg;
        this.numero_cpf = numero_cpf;
        this.data_de_nascimento = data_de_nascimento;
    }

    magia(): void {
        if (this.data_de_nascimento >= 2006) {
            console.log(`Você é de menor e seus Responsaveis são ${this.nome_da_mae} e ${this.nome_do_pai}`);
        } else {
            console.log("Você é de maior não é necessário responsável!!!");

        }
    }
}
let pessoa1 = new Pessoa("Stevão", "Rodrigues", "Paulo", "Mila", 1015426, 5460096013, 2006)
let pessoa2 = new Pessoa("Stevão", "Rodrigues", "Paulo", "Mila", 1015426, 5460096013, 2000)
pessoa1.magia()
pessoa2.magia()


console.log("========FRASE MOTIVACINAL========");
console.log("Não importa o quão lentamente você vai, desde que você não pare.\n - Confúcio");

