function criaCartao(categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)
}
function criaCartao(categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)

    criaCartao.classNome='cartao'

    criaCartao.innerHTML=`
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    </div>
    `
    container

}
