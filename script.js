function exibirNome() {
    // Obtém os elementos HTML onde os nomes serão inseridos
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    // Cria uma mensagem com o nome completo
    var mensagem = "Olá, " + nome + " " + sobrenome + "!";

    // Exibe a mensagem no elemento com o id "resultado"
    document.getElementById("resultado").textContent = mensagem;
}