class ValidarUsuarioLogado {
    constructor() {
        this.validarSaida();
        this.validarPermanencia();
    }

    redirecionar(direcao) {
        let a = document.createElement("a")
        a.href = direcao
        a.target = "_self"
        a.click()
    };

    validarSaida() {
        this.btnSair = document.querySelector(".btn-encerrar")
        this.btnSair.addEventListener("click", (e)=>{
            e.preventDefault();
            localStorage.removeItem('token')
            this.redirecionar("index.html");
        });
    };

    validarPermanencia() {
        if(localStorage.getItem('token') == null) {
            alert('Você deve estar logado para acessar esta página!')
            this.redirecionar("index.html");
        };
    };
};
const validarLogout = new ValidarUsuarioLogado();

class RedirecionarMenu extends ValidarUsuarioLogado{
    constructor() {
        super();
        this.redirecionarEscolha();
    }
    redirecionarEscolha() {
        this.btnEstoque = document.querySelector(".btn-g");
        this.btnEstoque.addEventListener("click", (e)=>{
            e.preventDefault();
            this.redirecionar("estoque.html");
        });

        this.btnCadastrarP = document.querySelector(".btn-p");
        this.btnCadastrarP.addEventListener("click", (e)=>{
            e.preventDefault();
            this.redirecionar("cadastrarproduto.html");
        });
    };
}
const redirecionarMenu = new RedirecionarMenu();
