// Função para substituir imagens ausentes por um texto de fallback
function replaceMissingImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            this.style.display = 'none'; // Oculta a imagem
            const placeholder = document.createElement('div');
            placeholder.textContent = 'Imagem não disponível';
            placeholder.style.color = '#666';
            placeholder.style.fontSize = '14px';
            placeholder.style.textAlign = 'center';
            placeholder.style.border = '1px dashed #ccc';
            placeholder.style.borderRadius = '8px';
            placeholder.style.padding = '20px';
            placeholder.style.margin = '10px 0';
            this.parentNode.insertBefore(placeholder, this.nextSibling);
        };
    });
}

// Função para adicionar interatividade ao clicar nos produtos
function addProductClickListeners() {
    const produtos = document.querySelectorAll('.produto, .promocao, .armacao');
    produtos.forEach(produto => {
        produto.addEventListener('click', () => {
            alert(`Você clicou em: ${produto.querySelector('p').textContent}`);
        });
    });
}

// Chama as funções quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    replaceMissingImages();
    addProductClickListeners();
});
