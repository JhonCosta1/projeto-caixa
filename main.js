class RecuperarSenha {
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
const recuperarSenha = new RecuperarSenha();


class Operador {
    constructor(){
        this.criarOperador();
        this.quadro = JSON.parse(localStorage.getItem('operadores')) || [];
    }

    salvarNoLocalStorage() {
        localStorage.setItem('operadores', JSON.stringify(this.quadro));
    }

    criarOperador() {
        this.btnCadastrar = document.querySelector("#cadastrar-operador")
        this.btnCadastrar.addEventListener("click", (e)=>{
            e.preventDefault();
            this.nome = document.querySelector("#rec-nome").value.trim();
            this.cpf = document.querySelector("#rec-cpf").value.trim();
            this.dataNascimento = document.querySelector("#rec-nascimento").value.trim();
            this.senha = document.querySelector("#rec-senha").value.trim();
            this.senhaValidar = document.querySelector("#rec-senha2").value.trim();

            if(this.validarCpf(this.cpf)) {
                console.log("CPF EXISTE")
            } else if(this.nome !== "" &&
                this.cpf !== "" &&
                this.dataNascimento !== "" &&
                this.senha !== "" &&
                this.senhaValidar !== ""
                ) {

                    if(this.senha === this.senhaValidar) {
                        const novoOperador = {
                            token: this.gerarToken(),
                            nome: this.nome,
                            cpf: this.cpf,
                            dataNascimento: this.dataNascimento,
                            senha: this.senha,
                            senhaValidar: this.senhaValidar,
                            
                        };
                        this.quadro.push(novoOperador);
                        this.salvarNoLocalStorage();
                    } else {
                        console.log("senhas difentes")
                    }

            }
        });
    }

    validarCpf(cpf) {
        return this.quadro.some(operador => operador.cpf === cpf);
    }

    gerarToken() {
        const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let tokenGerado = '';
    
        for (let i = 0; i < 15; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
            tokenGerado += caracteresPermitidos.charAt(indiceAleatorio);
        }
    
        return tokenGerado;
    }
}

const operador = new Operador()






class RetornarTelaInicialBtn {
    constructor() {
        this.redirecionarRecuperar();
        
    }

    redirecionarRecuperar() {
        this.loginInicial = document.querySelector("#login-inicial");
        this.folhaRecuperar = document.querySelector("#folha-recuperar");
        this.loginCadastrar = document.querySelector("#login-cadastrar");
        this.btnRedirecionar = document.querySelector("#recuperar-redirecionar");
        this.btnVoltar = [...document.querySelectorAll(".btn-retorno")];
        this.btnCadastrar = document.querySelector("#cadastrar-redirecionar");

        this.btnRedirecionar.addEventListener("click", (e) => {
            e.preventDefault();
            this.loginInicial.classList.add("n-show");
            this.loginCadastrar.classList.add("n-show");
            this.folhaRecuperar.classList.remove("n-show");
        });

        this.btnVoltar.forEach((el)=>{
            el.addEventListener("click", (e)=>{
                e.preventDefault()
                this.loginInicial.classList.remove("n-show");
                this.loginCadastrar.classList.add("n-show");
                this.folhaRecuperar.classList.add("n-show");
            })
        })

        this.btnCadastrar.addEventListener("click", (e) => {
            e.preventDefault();
            this.loginInicial.classList.add("n-show");
            this.loginCadastrar.classList.remove("n-show");
            this.folhaRecuperar.classList.add("n-show");
        });
    }
}
let retornarInicial = new RetornarTelaInicialBtn();