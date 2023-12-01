
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
            this.h3modal = document.querySelector(".cpf-modal")

            if (
                this.nome !== "" &&
                this.cpf !== "" &&
                this.dataNascimento !== "" &&
                this.senha !== "" &&
                this.senhaValidar !== ""
            ) {

                if(this.validarCpf(this.cpf)){
                    this.h3modal.classList.remove("n-show")
                    this.h3modal.innerHTML = "Lamento, CPF já cadastrado"
                } else if (this.senha !== this.senhaValidar) {
                    this.h3modal.innerHTML = "Lamento, senhas divergentes"
                } else {
                    this.h3modal.innerHTML = "Novo operador cadastrado com sucesso"
                    const novoOperador = {
                        token: this.gerarToken(),
                        registroOperador: Math.random().toString(36).slice(2, 8),
                        nome: this.nome,
                        cpf: this.cpf,
                        dataNascimento: this.dataNascimento,
                        senha: this.senha,
                        senhaValidar: this.senhaValidar,
                    };
                    this.quadro.push(novoOperador);
                    this.salvarNoLocalStorage();
                    this.limparCamposCadastro();
                    this.h3modal.classList.remove("n-show");
                }
            }
        });
    }

    validarCpf(cpf) {
        return this.quadro.some(operador => operador.cpf === cpf);
    }


    limparCamposCadastro() {
        this.nome = document.querySelector("#rec-nome").value = "";
        this.cpf = document.querySelector("#rec-cpf").value = "";
        this.dataNascimento = document.querySelector("#rec-nascimento").value = "";
        this.senha = document.querySelector("#rec-senha").value = "";
        this.senhaValidar = document.querySelector("#rec-senha2").value = "";
        this.codigoOperadorRecuperar = document.querySelector("#login-recuperar").value = "";
        this.cpfRecuperar = document.querySelector("#cpf-recuperar").value = "";
        this.h3modal = document.querySelector(".cpf-modal");
        this.h3modal.classList.add("n-show");
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

class RetornarTelaInicialBtn extends Operador{
    constructor() {
        super();
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
                this.h5modalR = document.querySelector(".tituloR");
                this.h5modalR.classList.add("n-show");
                this.limparCamposCadastro();
            })
        })

        this.btnCadastrar.addEventListener("click", (e) => {
            e.preventDefault();
            this.loginInicial.classList.add("n-show");
            this.loginCadastrar.classList.remove("n-show");
            this.folhaRecuperar.classList.add("n-show");
            this.limparCamposCadastro();
        });
    }
}
let retornarInicial = new RetornarTelaInicialBtn();

class RecuperarSenha extends RetornarTelaInicialBtn {
    constructor() {
        super();
        this.validarRecuperar();
    }

    validarRecuperar() {
        this.btnRecuperar = document.querySelector("#btn-recuperar");
        this.btnRecuperar.addEventListener("click", (e) => {
            e.preventDefault();
            this.codigoOperadorRecuperar = document.querySelector("#login-recuperar").value.trim();
            this.cpfRecuperar = document.querySelector("#cpf-recuperar").value.trim();
            this.h5modalR = document.querySelector(".tituloR");
            if (this.cpfRecuperar !== "") {
                if(this.validarRecuperacao(this.cpfRecuperar, this.codigoOperadorRecuperar)) {
                    this.h5modalR.innerHTML = "Senha enviada para seu Supervisor, contate-o para recebê-la";
                    this.h5modalR.classList.remove("n-show");
                    this.limparCamposCadastro();
                } else {
                    this.h5modalR.innerHTML = "Dados divergentes ou não existem";
                    this.h5modalR.classList.remove("n-show");
                }
            } else {
                this.h5modalR.innerHTML = "Por favor, preencha todos os campos";
                this.h5modalR.classList.remove("n-show");
            }
        });
    };

    validarRecuperacao(cpfRecuperar, codigoOperadorRecuperar) {
        return this.quadro.find(operador => operador.cpf === cpfRecuperar && operador.registroOperador === codigoOperadorRecuperar)
    };
}
const recuperarSenha = new RecuperarSenha();
