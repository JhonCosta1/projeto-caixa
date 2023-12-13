class ValidarUsuarioLogado {
    constructor() {
        this.validarSaida();
        this.validarPermanencia();
    }

    redirecionarSaida() {
        let a = document.createElement("a")
        a.href = "index.html"
        a.target = "_self"
        a.click()
    };

    validarSaida() {
        this.btnSair = document.querySelector(".btn-encerrar")
        this.btnSair.addEventListener("click", (e)=>{
            e.preventDefault();
            localStorage.removeItem('token')
            this.redirecionarSaida();
        });
    };

    validarPermanencia() {
        if(localStorage.getItem('token') == null) {
            alert('Você deve estar logado para acessar esta página!')
            this.redirecionarSaida();
        };
    };
};
const validarLogout = new ValidarUsuarioLogado();

