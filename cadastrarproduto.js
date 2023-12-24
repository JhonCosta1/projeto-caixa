class CadastrarProduto{
    constructor(){

        this.enviarProutos();
        this.estoque = JSON.parse(localStorage.getItem('produtos')) || [];
    }

    salvarNoLocalStorageEstoque() {
        localStorage.setItem('produtos', JSON.stringify(this.estoque));
    };

    enviarProutos() {
        this.btnCadastarProduto = document.querySelector(".cadastrar-produto");

        this.btnCadastarProduto.addEventListener("click", (e)=>{
            e.preventDefault();
            this.nomeProduto = document.querySelector(".nome-produto").value.trim();
            this.peso = document.querySelector(".peso-produto").value.trim();
            this.validade = document.querySelector(".validade-produto").value.trim();
            this.quantidade = document.querySelector(".quantidade-produto").value.trim();
            this.h3modalEstoque = document.querySelector(".estoque-modal");

            if (
                this.nomeProduto !== "" &&
                this.peso !== "" &&
                this.validade !== "" &&
                this.quantidade !== ""
            ) {
                this.h3modalEstoque.innerHTML = "Novo produto cadastrado com sucesso"
                this.h3modalEstoque.classList.remove("n-show");
                const novoProduto = {
                    nome: this.nomeProduto,
                    peso: this.peso,
                    validade: this.validade,
                    quantidade: this.quantidade
                    };
                    this.estoque.push(novoProduto);
                    this.salvarNoLocalStorageEstoque();
                } 
            else {
                this.h3modalEstoque.classList.remove("n-show");
                this.h3modalEstoque.innerHTML = "Preencha todos os campos";
            }
        });
    }
}
const cadastarProduto = new CadastrarProduto();

class ValidarUsuarioLogadoEstoque {
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
const validarLogoutEstoque = new ValidarUsuarioLogadoEstoque();

class RedirecionarMenu extends ValidarUsuarioLogadoEstoque{
    constructor() {
        super();
        this.redirecionarEscolha();
    }
    redirecionarEscolha() {
        this.btnEstoqueVoltar = document.querySelector(".btn-voltarEstoque");
        this.btnEstoqueVoltar.addEventListener("click", (e)=>{
            e.preventDefault();
            this.redirecionar("homepage.html");
        });

    };
}
const redirecionarMenu = new RedirecionarMenu();
