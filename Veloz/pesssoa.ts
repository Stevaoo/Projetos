import { log } from "console";
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
// Metodo magia que faz a logica de indentifcar se o Usuario é de maior ou não
    magia(): void {

        let dataAtual = new Date(); // Me fala a data atual
        let anoAtual = dataAtual.getFullYear(); // me fala o ano Atual
        // usei um operador matematico para mostra minha idade com a condição sendo 2024 o ano atual 
        let idade = anoAtual - this.data_de_nascimento;
        
        if (this.data_de_nascimento >= 18) {
            console.log(`Você é de Menor e seus Responsaveis são ${this.nome_da_mae} e ${this.nome_do_pai}`);
        } else {
            console.log("Você é de Maior não é necessário responsável!!!");

        }
    

// function que pede para o usuario criar a PESSSOA
function pessoa1(){
    let nome = rl.question("Insira seu nome: ")
    let sobrenome = rl.question("Insira seu sobrenome: ")
    let nomeDaMae = rl.question("Insira o nome da sua mae: ")
    let nomeDoPai = rl.question("Insira o nome da seu pai: ")
    let seuRG = rl.questionInt("Insira seu RG: ")
    let seuCPF = rl.questionInt("Insira seu CPF: ")
    let dataDeNascimento = rl.questionInt("Insira sua data de Nascimento: ")
    
    let pessoa1 = new Pessoa(nome,sobrenome,nomeDaMae,nomeDoPai,seuRG,seuCPF,dataDeNascimento);
    pessoa1.magia()
    // usei um operador matematico para mostra minha idade com a condição sendo 2024 o ano atual 
    
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
        }
    }
}
