function calcular(num1, num2) {
    return {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicacao: num1 * num2,
        divisao: num2 !== 0 ? num1 / num2 : "Divisão por zero não permitida"
    };
}
calcular ()