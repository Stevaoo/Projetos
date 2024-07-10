import { Icarro } from "./interfaces";
export class Carro implements Icarro {
    veiculo: string;
    marca: string;
    ano: number;
    combustivel: string;
    km: number;

    constructor(veiculo: string, marca: string, ano: number, combustivel: string, km: number) {
        this.veiculo = veiculo;
        this.marca = marca;
        this.ano = ano;
        this.combustivel = combustivel;
        this.km = km
    }

    andar(): void {
        console.log('oi');

    }


    obterGasolima(): void {

    }

    adicionarGasolina(): void {

    }
}

let carro1 = new Carro("Fusca", "Volkswagen", 1986, "Gasolina", 120000)
let carro2 = new Carro("Uno", "Fiat", 2001, "Álcool", 150000)
let carro3 = new Carro("Civic", "Honda", 2024, "Gasolina", 0)
let carro4 = new Carro("Corolla", "Toyta", 2015, "Flex", 60000)
let carro5 = new Carro("EcoSport", "Ford", 2012, "Diesel", 900000)
let carro6 = new Carro("Onix", "Chevrolet", 2019, "Flex", 30000)
let carro7 = new Carro("Sandero", "Renault", 2017, "Gasolina", 45000)
let carro8 = new Carro("Aventador", "Lamborghini", 2020, "Gasolina", 12000)
let carro9 = new Carro("488 GTB", "Ferrari", 2018, "Gasolina", 20000)
let carro10 = new Carro("Regera", "Koenigsegg", 2027, "Híbrido", 0)

console.log(carro4);
carro4.andar()
carro4.obterGasolima()
carro4.adicionarGasolina()
