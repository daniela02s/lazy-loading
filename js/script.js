const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const image = entry.target;

        // Troca o tamanho da imagem para alta resolução
        image.src = image.src.replace("&w=10&", "&w=1000&");

        // Quando a imagem alta carregar, adiciona a classe "loaded" para fazer o fade-in
        image.onload = () => {
            image.classList.add("loaded");
        };

        // Para de observar essa imagem
        observer.unobserve(image);
    });
}, {
    rootMargin: "200px 0px"
});

// Faz o observer observar todas as imagens
images.forEach((image) => {
    observer.observe(image);
});
