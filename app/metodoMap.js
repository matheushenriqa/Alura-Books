function aplicarDesconto(listaDeLivros) {
    const desconto = 0.3;

    //Para cada elemento no array faça uma copia do elemento e modifique
    // apenas o preço do livro
    livrosComDesconto = listaDeLivros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    });
    return livrosComDesconto;
}   