const leia = require("prompt-sync")();

let opcao1 = "";
let opcao2 = "";
let carrinho = [];

const Cod = [1,2,3,4,5,6,7,8,9,10];
const Nome = ["Bob", "Buddy", "Thor", "Theo", "Aimi", "Bruce", "Lucky", "Messi", "John", "Maya"];
const Raca = ["pug", "Shihtzu", "Buldogue", "Vira-lata", "Puddle", "Lhasa apso", "Cocker Americano","Maltes","Bernezi","Spitzi"];

do {
    console.log("");
    console.log("ONG Patinhas do amanhã");
    console.log("");
    console.log("1 - Ir para o Menu de opções");
    console.log("2 - Sair");
    opcao1 = leia("Digite o número referente à opção desejada: ");

    if (opcao1 === "1") {
        do {
            console.log("");
            console.log("O seu carrinho de adoções: " + carrinho);
            console.log("1 - Adoção");
            console.log("2 - Sair");
            console.log("");
            opcao2 = leia("Digite o número da opção: ");

            if (opcao2 === "1") {
                console.log("");
                for (let x = 1; x < Cod.length; x++) {
                    console.log("COD"+ x +'\t'+ Nome[x] + '\t' + Raca[x]);
                }
                const i = leia("Digite o número do animal que você quer adotar (ou 's' para sair): ");
                if (i !== "s") {
                    const animalIndex = parseInt(i);
                    if (animalIndex >= 0 && animalIndex < Cod.length) {
                        carrinho.push(Nome[animalIndex]);
                        console.log("Animal adicionado ao carrinho!");
                    } else {
                        console.log("Número inválido. Tente novamente.");
                    }
                }
            }
        } while (opcao2 !== "2");
    }
} while (opcao1 !== "2");

console.log("Obrigado pela sua visita! Volte sempre e cuide bem do(s) : " + carrinho);