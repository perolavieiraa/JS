// 11
let numero = prompt ("Digite um número:");
function verificarSinal(numero) {
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}

verificarSinal(numero);

// 12
let numero = prompt ("Digite uma temperatura:");
function converterTemperatura(celsius) {
    return (celsius * 9/5) + 32;
}
converterTemperatura(celsius);

// 13
function somarNumeros(numero) {
    let soma = 0;
    let i = 1;
    while (i <= 100) {
        soma += i;
        i++;
    }
    console.log(soma);
}
somarNumeros(numero);

// 14
function substituirPalavra(text) {
    console.log (text.replace (/azul/g, "vermelho"));
}
let texto = prompt("Digite o texto:");
substituirPalavra (texto);

// 15
let texto = prompt("Digite o texto:");
function verificarTamanho(string) {
    if (string.length > 10) {
        console.log("Mais de 10 caracteres");
    } else {
        console.log("10 caracteres ou menos");
    }
}
verificarTamanho(string);

// 16
let texto = prompt("Digite o texto:");
function acessarArray() {
    const frutas = ["abacaxi", "banana", "maçã", "amora", "pitanga"];
    console.log(frutas[2]); 
}
acessarArray()

// 17
let texto = prompt("Digite o texto:");
function saudacao(nome, saudacao = "Bem-vindo(a)") {
    return `${saudacao}, ${nome}!`;
}
saudacao(nome, saudacao = "Bem-vindo(a)")

// 18
let texto = prompt("Digite a nota:");
function verificarAprovacao(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado";
}
verificarAprovacao(nota);

// 19
function contarPares() {
    for (let i = 0; i <= 30; i += 2) {
        console.log(i);
    }
}
contarPares();
// 20
let palavra = prompt("Digite o numero:");
function contarVogais(palavra) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            if (vogais.includes (letra)){
            contador++;
        }
    }
    console.log (contador);
}
}
contarVogais(palavra);

// 21
let numero = prompt("Digite os numeros:");
function somarArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
somarArray(arr);

// 22
let numero = prompt("Digite o numero:");
function dobrarNumero(numero) {
    return numero * 2;
}
dobrarNumero(numero);

// 23
function contarParesWhile() {
    let i = 2;
    while (i <= 20) {
        console.log(i);
        i += 2;
    }
}
contarParesWhile()

// 24
let string = prompt("Digite o texto:");
function capitalizar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
capitalizar(string)

// 25
let numero = prompt("Digite o ano:");
function anoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
anoBissexto(ano);