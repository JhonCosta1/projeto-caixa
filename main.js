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
const redirecionar = new Recuperar()