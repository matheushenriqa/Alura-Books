const botoes = document.querySelectorAll('.btn');

// Para cada botão, adiciona um evento de click que chama a função filtrarLivros
botoes.forEach((btn) => {
    btn.addEventListener('click', filtrarLivros);
})

// Pega o value do botão que foi clicado, filtra os livros que tenham a mesma 
// categoria, aplica o desconto e exibe os livros na tela
function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(aplicarDesconto(livrosFiltrados));
    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(aplicarDesconto(livrosFiltrados));
        exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$<span id="valor">${valorTotal}</span></p>
        </div>
    `;
}