let palavra, resultado;
palavra = document.getElementById("palavra");

let palavraInvertida;

resultado = document.getElementById("resultado")

inverterPalavra = () => {

    palavraInvertida = "";
    
​

/* No JavaScript, podemos pensar em uma palavra como uma lista (ou "vetor").
Cada letra da palavra é um item dessa lista. Quando queremos inverter a palavra, 
podemos percorrer essa lista de letras começando do final, indo em direção ao começo. 
À medida que percorremos essa lista, vamos colocar cada letra na nova palavra */
  
    for (let index = palavra.value.length - 1; index >= 0; index--) {
        palavraInvertida += palavra.value[index]
    }

    resultado.innerHTML = palavraInvertida
}