// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Configuração: tempo em milissegundos para trocar de slide (ex: 30000 = 30 segundos)
    const tempoDeTroca = 30000; 

    // Pega todos os elementos que são slides de relatório
    const slides = document.querySelectorAll('.report-slide');
    let indiceSlideAtual = 0;

    // Se não houver slides, não faz nada
    if (slides.length === 0) {
        return;
    }

    function proximoSlide() {
        // Esconde o slide atual removendo a classe 'active'
        slides[indiceSlideAtual].classList.remove('active');

        // Calcula o índice do próximo slide
        // O operador '%' (módulo) garante que o índice volte a 0 quando chegar ao fim
        indiceSlideAtual = (indiceSlideAtual + 1) % slides.length;

        // Mostra o novo slide adicionando a classe 'active'
        slides[indiceSlideAtual].classList.add('active');
    }

    // Inicia a troca automática de slides
    setInterval(proximoSlide, tempoDeTroca);
});