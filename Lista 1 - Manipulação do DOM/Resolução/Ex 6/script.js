let numero, resultado;
numero = document.getElementById("numero");

let fatorial;

resultado = document.getElementById("resultado")

gerarFatorial = () => {
    // Ex. de fatoriais:
    // Fatorial de 4 --> 4 * 3 * 2 * 1
    // Fatorial de 6 --> 6 * 5 * 4 * 3 * 2 * 1
    fatorial = 1;

    for (let index = 1; index < numero.value; index++) {
        fatorial += fatorial * index
    }

    resultado.innerHTML = fatorial
}