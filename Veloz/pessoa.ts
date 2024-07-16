import { Ipessoa } from "./interfaces";
let rl = require("readline-sync");
// Molde para o obj Pessoa usando uma interface que já definou suas atribuicoes 
class Pessoa implements Ipessoa {
    nome: string;
    sobrenome: string;
    nome_do_pai: string;
    nome_da_mae: string;
    numero_rg: number;
    numero_cpf: number;
    ano_de_nascimento: number;

    constructor(nome: string, sobrenome: string, nome_do_pai: string, nome_da_mae: string, numero_rg: number, numero_cpf: number, ano_de_nascimento: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome_da_mae = nome_da_mae;
        this.nome_do_pai = nome_do_pai;
        this.numero_rg = numero_rg;
        this.numero_cpf = numero_cpf;
        this.ano_de_nascimento = ano_de_nascimento;
    }

// Metodo magia que faz a logica de indentifcar se o Usuario é de maior ou não
    magia(): void {
        if (this.ano_de_nascimento >= 18) {
            console.log(`Você é de Menor e seus Responsaveis são ${this.nome_da_mae} e ${this.nome_do_pai}`);
        } else {
            console.log("Você é de Maior não é necessário responsável!!!");
            
        }
        
    }
}

    let nome = rl.question("Insira seu nome: ")
    let sobrenome = rl.question("Insira seu Sobrenome: ")
    let nomeDaMae = rl.question("Insira o Nome da sua mae: ")
    let nomeDoPai = rl.question("Insira o Nome da seu pai: ")
    let seuRG = rl.questionInt("Insira seu RG: ")
    let seuCPF = rl.questionInt("Insira seu CPF: ")
    let anoDeNascimento = rl.questionInt("Insira seu Ano de Nascimento: ")

let pessoaa =  new Pessoa(nome,sobrenome,nomeDoPai,nomeDaMae,seuRG,seuCPF,anoDeNascimento)

pessoaa.magia()

    // usei um operador matematico para mostra minha idade com a condição sendo 2024 o ano atual 
    let idade = 2024 - anoDeNascimento
    console.log(`
    
    =============SEUS DADOS=============
                Nome : ${nome}
                Sobrenome: ${sobrenome}
                Nome Da Mãe: ${nomeDaMae}
                Nome Do Pai: ${nomeDoPai}
                RG: ${seuRG}
                CPF: ${seuCPF}
                Idade: ${idade}
                
                
                
    Não importa o quão lentamente você vai, desde que você não pare.\n - Confúcio
                `);
                

