let altura, peso, imc;

// Pegar o input da altura
altura = document.getElementById("altura");
peso = document.getElementById("peso");

// Pegar da div para mostrar o resultado
div = document.getElementById("resultado");

calcularImc = () => {
    //se quiser pode converter texto para número decimal (parseFloat)
    imc = peso.value / (altura.value * altura.value);

    div.innerHTML = imc;
}