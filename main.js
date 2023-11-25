class Recuperar {
    constructor() {
        this.btnRedirecionar = document.querySelector("#recuperar-redirecionar");
        this.redirecionarRecuperar();
    }

    redirecionarRecuperar() {
        this.btnRedirecionar.addEventListener("click", (e) => {
            e.preventDefault();
            this.loginInicial = document.querySelector("#login-inicial");
            this.folhaRecuperar = document.querySelector("#folha-recuperar");
            this.loginInicial.classList.add("n-show");
            this.folhaRecuperar.classList.remove("n-show");
        });
    }
}

const redirecionar = new Recuperar()