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