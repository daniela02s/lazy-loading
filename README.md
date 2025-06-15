# Lazy Loading de Imagens com Intersection Observer

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</p>

## 📝 Descrição

Este é um projeto simples para demonstrar a técnica de **Lazy Loading** (carregamento preguiçoso) de imagens utilizando a API nativa do navegador **`IntersectionObserver`**. O objetivo é melhorar a performance de páginas web, carregando as imagens apenas quando elas estão prestes a entrar na área visível do usuário (viewport).

Isso resulta em:
* **Carregamento inicial mais rápido:** A página se torna interativa em menos tempo.
* **Economia de banda:** O usuário baixa apenas os recursos que realmente visualiza.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para a estrutura da página.
* **CSS3:** Para a estilização básica e efeitos visuais.
* **JavaScript (ES6+):** Para a lógica de programação.
* **`IntersectionObserver` API:** O núcleo da funcionalidade de lazy loading, permitindo monitorar a visibilidade dos elementos de forma otimizada.

---

## 🤔 Como Funciona

A lógica do projeto segue uma abordagem moderna e eficiente:

1.  **Estrutura HTML:** Cada imagem (`<img>`) é carregada inicialmente com um `src` apontando para uma imagem "placeholder" de baixa qualidade. A URL da imagem real, de alta resolução, é armazenada em um atributo `data-src`.

2.  **Seleção via JavaScript:** O script seleciona todas as imagens que possuem o atributo `data-src`.

3.  **Observador de Intersecção:** Um `IntersectionObserver` é configurado para "observar" todas essas imagens.

4.  **Troca de Imagem:** Quando o observador detecta que uma imagem está entrando na viewport:
    * O valor do `data-src` é copiado para o `src` da imagem, iniciando o download da versão em alta qualidade.
    * (Opcional, mas recomendado) Uma classe `.loaded` é adicionada à imagem após o carregamento completo (`onload`), permitindo a aplicação de efeitos de transição (como fade-in) via CSS.

5.  **Otimização:** Assim que a imagem é carregada, ela deixa de ser observada (`unobserve`) para economizar recursos do navegador.

