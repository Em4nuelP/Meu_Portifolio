// Seleciona todos os botões de cabeçalho do accordion
var acc = document.getElementsByClassName("accordion-headerpowerb");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Alterna a classe 'active' para o botão clicado
        this.classList.toggle("active");

        // Alterna entre exibir e ocultar o conteúdo do accordion
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
