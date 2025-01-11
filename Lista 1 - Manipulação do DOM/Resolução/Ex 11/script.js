// Função para contar a quantidade de caracteres e exibir o resultado
function contarCaracteres() {
    // Obtém a mensagem digitada pelo usuário
    let mensagem = document.getElementById("mensagem").value;
    
    // Conta a quantidade de caracteres, incluindo os espaços
    let quantidadeCaracteres = mensagem.length;

    // Exibe o resultado no parágrafo com id "resultado"
    document.getElementById("resultado").innerHTML = "<strong>Quantidade de caracteres: " + quantidadeCaracteres + "</strong>";
}

// Limita a entrada do textarea para 10 caracteres
const textarea = document.getElementById('mensagem');
textarea.addEventListener('input', function() {
    if (textarea.value.length > 10) {
        textarea.value = textarea.value.substring(0, 10); // Vai garantir que não ultrapasse 10 caracteres
    }
});
