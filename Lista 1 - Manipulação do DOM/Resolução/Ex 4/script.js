let numero, resultado;

numero = document.getElementById("numero");
resultado = document.getElementById("resultado")

gerarTabuada = () => {
    let tabuada = "";

    // Sempre lembrar do value para pegar o valor do input!
    
    for (let index = 0; index < numero.value; index++) {
        // Usan interpolação
        tabuada += `${numero.value} X ${index} = ${numero.value * index} <br>`;

        // Usan concatenação
        // tabuada += numero.value + " X " + index + " = " + (numero.value * index) + "<br>"
    }

    resultado.innerHTML = tabuada;
}