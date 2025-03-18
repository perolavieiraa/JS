let n = 10;
function VerificarPar(num){
    if (num % 2 == 0) {
        print("Par");
    } else {
        print("impar");
    }
}
VerificarPar(n)

let nmr1 = 10
let nmr2 = 35
function calcular(n1, n2) {
    print(n1 + n2)
    print(n1 - n2)
    print(n1 * n2)
    print(n1 / n2)
}
calcular(nmr1, nmr2)

for (count = 10; count > 0; count--) {
    print(count)
}

let texto = "JavaScript"
function inverterTexto(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    print(joinArray)
}
inverterTexto(texto)

let string = "badalhoca"
function CountCaracter(str) {
    print(str.length)
}
CountCaracter(string)

let carro = {
    marca: "a",
    modelo: "b",
    ano: "1989"
}
print(carro.modelo)

let nome = "pérola"
let msg = "vc é legal"
function mensagemPersonalizada(name, message) {
    print("Olá, " + name + message);
}
mensagemPersonalizada(nome, msg)

let n1 = 10
let n2 = 10
let n3 = 10
function media(nm1, nm2, nm3) {
    print((nm1 + nm2 + nm3)/3)
}
media(n1, n2, n3)

for (let i = 1; i < 21; i++) {
    if (i % 3 == 0) {
        print(i + " é multiplo de 3")
    } else {
        print(i + " não é multiplo de 3")
    }
}

let strin = "casca"
function verificarPalindromo(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    if (strin == joinArray) {
        print("Palindromo")
    } else {
        print("Não é palindromo")
    }
}
verificarPalindromo(strin)