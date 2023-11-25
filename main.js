class Recuperar {
    constructor() {
        this.validarRecuperar();
    }

    validarRecuperar() {
        this.btnRecuperar = document.querySelector("#btn-recuperar");

        this.btnRecuperar.addEventListener("click", (e)=>{
            this.loginRecuperar = document.querySelector("#login-recuperar").value.trim();
            this.cpfRecuperar = document.querySelector("#cpf-recuperar").value.trim();
            e.preventDefault();
            if(this.loginRecuperar && this.cpfRecuperar !== ""){
                //criar página de cadastrar funcionário
                //criar objeto para salvar funcionarios criados no localstorage
                //depois voltar aqui e criar lógica para validar se funcionário existe
            }
        })
    }
}
const redirecionar = new Recuperar();

class Buttonretornar {
    constructor() {
        this.redirecionarRecuperar();
        
    }

    redirecionarRecuperar() {
        this.loginInicial = document.querySelector("#login-inicial");
        this.folhaRecuperar = document.querySelector("#folha-recuperar");
        this.loginCadastrar = document.querySelector("#login-cadastrar");
        this.btnRedirecionar = document.querySelector("#recuperar-redirecionar");
        this.btnVoltar = document.querySelector("#btn-voltar");

        this.btnRedirecionar.addEventListener("click", (e) => {
            e.preventDefault();
            this.loginInicial.classList.add("n-show");
            this.loginCadastrar.classList.add("n-show");
            this.folhaRecuperar.classList.remove("n-show");
        });

        this.btnVoltar.addEventListener("click", (e) => {
            e.preventDefault();
            this.loginInicial.classList.remove("n-show");
            this.loginCadastrar.classList.add("n-show");
            this.folhaRecuperar.classList.add("n-show");
        });
    }
}
let retornarInicial = new Buttonretornar();