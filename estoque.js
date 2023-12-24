class VoltarMenu{
    constructor() {
        this.redirecionarEscolha();
    }

    redirecionar(direcao) {
        let a = document.createElement("a")
        a.href = direcao
        a.target = "_self"
        a.click()
    };

    redirecionarEscolha() {
        this.btnVoltar = document.querySelector(".btn-voltarSelecao");
        this.btnVoltar.addEventListener("click", (e)=>{
            e.preventDefault();
            this.redirecionar("homepage.html");
        });
    };
}
const voltarMenu = new VoltarMenu();
class CriarCardProduto{
    constructor() {
        this.produtos = JSON.parse(localStorage.getItem("produtos")) || {};
        this.card();
    }

    card() {
        this.areaProdutos = document.querySelector("#area-produtos")
        this.produtos.forEach(produto => {
            this.divPrincipal = document.createElement("div");
            this.divPrincipal.classList.add("produto");
            this.ul = document.createElement("ul")
            this.ul.classList.add("conteudo-produto");
            this.liP = document.createElement("li")
            this.liP.classList.add("dados-produto")
            this.liP.innerHTML = `Nome: ${produto.nome}`
            this.liS = document.createElement("li")
            this.liS.classList.add("dados-produto")
            this.liS.innerHTML = `Peso(Kg/L): ${produto.peso}`
            this.liT = document.createElement("li")
            this.liT.classList.add("dados-produto")
            this.liT.innerHTML = `Validade: ${produto.validade}`
            this.liQ = document.createElement("li")
            this.liQ.classList.add("dados-produto")
            this.liQ.innerHTML = `Quantidade: ${produto.quantidade}`
            this.ul.appendChild(this.liP)
            this.ul.appendChild(this.liS)
            this.ul.appendChild(this.liT)
            this.ul.appendChild(this.liQ)
            this.divPrincipal.appendChild(this.ul);
            this.areaProdutos.appendChild(this.divPrincipal);

        });
    }
}
const card = new CriarCardProduto();

class ValidarUsuarioLogadoEstoqueV {
    constructor() {
        this.validarPermanencia();
    }

    redirecionar(direcao) {
        let a = document.createElement("a")
        a.href = direcao
        a.target = "_self"
        a.click()
    };

    validarPermanencia() {
        if(localStorage.getItem('token') == null) {
            alert('Você deve estar logado para acessar esta página!')
            this.redirecionar("index.html");
        };
    };
};
const validarLogoutEstoqueV = new ValidarUsuarioLogadoEstoqueV();