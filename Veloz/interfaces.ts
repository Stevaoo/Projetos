export interface Icarro {
    veiculo: string;
    marca: string;
    ano: number;
    combustivel: string;
    km: number

    andar(): void;
    obterGasolima(): void;
    adicionarGasolina(): void;
}

export interface Icliente {
    inserirDados()
}

export interface Ipessoa {
    nome: string;
    sobrenome: string;
    nome_do_pai: string;
    nome_da_mae: string;
    numero_rg: number;
    numero_cpf: number;
    data_de_nascimento: number;
    magia()
}