const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

// Organiza os livros em ordem decrescente de preço e exibe na tela
function ordenarLivrosPorPreco() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(aplicarDesconto(livrosOrdenados));
}