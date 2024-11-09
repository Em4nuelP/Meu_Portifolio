const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = document.querySelector('.carousel-items');
let currentIndex = 0;

// Número total de itens no carrossel
const totalItems = document.querySelectorAll('.portfolio-item').length;

// Função para calcular o número de itens visíveis com base no tamanho da tela
function getItemsPerView() {
    const width = window.innerWidth;

    if (width >= 1200) {
        return 4; // 4 itens visíveis em telas grandes
    } else if (width >= 768) {
        return 3; // 3 itens visíveis em telas médias
    } else if (width >= 480) {
        return 2; // 2 itens visíveis em telas pequenas
    } else {
        return 1; // 1 item visível em telas muito pequenas
    }
}

// Função para mover o carrossel para a esquerda
function moveToPrev() {
    const itemsPerView = getItemsPerView();

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = Math.ceil(totalItems / itemsPerView) - 1; // Volta para o último conjunto
    }
    updateCarousel();
}

// Função para mover o carrossel para a direita
function moveToNext() {
    const itemsPerView = getItemsPerView();

    if (currentIndex < Math.ceil(totalItems / itemsPerView) - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta para o primeiro conjunto
    }
    updateCarousel();
}

// Atualizar a posição do carrossel
function updateCarousel() {
    const itemsPerView = getItemsPerView();
    const gap = parseInt(window.getComputedStyle(carouselItems).getPropertyValue('gap')); // Obtém o valor do 'gap' em px
    const itemWidth = (100 / itemsPerView); // A largura de cada item baseado no número de itens visíveis
    const offset = -currentIndex * (itemWidth + (gap / window.innerWidth) * 100); // Ajusta o deslocamento com base no espaço entre os itens
    carouselItems.style.transform = `translateX(${offset}%)`;
}

// Adiciona eventos aos botões
prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);

// Atualiza o carrossel quando a janela for redimensionada
window.addEventListener('resize', updateCarousel);

// Inicializa o carrossel corretamente ao carregar a página
updateCarousel();
    