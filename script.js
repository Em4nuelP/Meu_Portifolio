// Seleciona todos os botões de cabeçalho do accordion
var acc = document.getElementsByClassName("accordion-header");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;
        content.classList.toggle("open");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
