class Recuperar {
    constructor() {
        this.redirecionarRecuperar();
        this.validarRecuperar();
    }

    redirecionarRecuperar() {
        this.btnRedirecionar = document.querySelector("#recuperar-redirecionar");
        this.btnRedirecionar.addEventListener("click", (e) => {
            e.preventDefault();
            this.loginInicial = document.querySelector("#login-inicial");
            this.folhaRecuperar = document.querySelector("#folha-recuperar");
            this.loginInicial.classList.add("n-show");
            this.folhaRecuperar.classList.remove("n-show");
        });
    }

    validarRecuperar() {
        this.btnRecuperar = document.querySelector("#btn-recuperar");
        this.loginRecuperar = document.querySelector("#login-recuperar");
        this.cpfRecuperar = document.querySelector("#cpf-recuperar")

        this.btnRecuperar.addEventListener("click", (e)=>{
            e.preventDefault();
            
        })
    }
}
const redirecionar = new Recuperar()