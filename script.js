// Seleciona todos os botões de cabeçalho do accordion
const accHeaders = document.querySelectorAll(".accordion-header");

accHeaders.forEach((header) => {
    header.addEventListener("click", function() {
        // Fechar outros itens abertos
        accHeaders.forEach((item) => {
            if (item !== this) {
                item.classList.remove("active");
                item.nextElementSibling.classList.remove("open");
                item.nextElementSibling.style.maxHeight = null;
            }
        });

        // Alterna o item clicado
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        content.classList.toggle("open");

        // Transição suave usando max-height
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
