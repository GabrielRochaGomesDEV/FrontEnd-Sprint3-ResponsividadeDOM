// Função para contar a quantidade de caracteres e exibir o resultado
function contarCaracteres() {
    // Obtém a mensagem digitada pelo usuário
    let mensagem = document.getElementById("mensagem").value;
    
    // Conta a quantidade de caracteres, incluindo os espaços
    let quantidadeCaracteres = mensagem.length;

    // Exibe o resultado no parágrafo com id "resultado"
    document.getElementById("resultado").innerHTML = "<strong>Quantidade de caracteres: " + quantidadeCaracteres;
}