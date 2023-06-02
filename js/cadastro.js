
/**
 * @param {HTMLInputElement} input 
 * @returns 
 */
function maskCPF(input) {
    //https://gist.github.com/fernandovaller/b10a3be0e7b3b46e5895b0f0e75aada5
    let v = input.value;
    v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    input.value = v;
}

/**
 * @param {HTMLInputElement} input
 * @returns
 */
function maskCelular(input) {
    let v = input.value;
    v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2")   //Coloca o parenteses em volta do ddd
    v = v.replace(/(\d)(\d{4})$/, "$1-$2")      //Coloca o hífen entre o quarto e o quinto dígitos
    input.value = v;
}

/**
 * @param {string} id
 * @param {HTMLLinkElement} a
 * @returns
 */
function mostrarSenha(a, id) {
    let input = document.getElementById(id);
    if (input.type == "password") {
        input.type = "text";
        a.innerHTML = "🙉";
    } else {
        input.type = "password";
        a.innerHTML = "🙈";
    }
}

/**s
 * @param {HTMLInputElement} input
 * @returns
 */
function maskNascimento(input) {
    let v = input.value;
    v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
    v = v.replace(/(\d{2})(\d)/, "$1/$2")       //Coloca uma barra entre o segundo e o terceiro dígitos
    v = v.replace(/(\d{2})(\d)/, "$1/$2")       //Coloca uma barra entre o segundo e o terceiro dígitos
    input.value = v;
}

function cadastrar() {
    //faz um json com os campos e coloca no console
    let nome = document.getElementById("nome").value;
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let CPF = document.getElementById("CPF").value;
    let celular = document.getElementById("celular").value;
    let nascimento = document.getElementById("nascimento").value;
    let pronome = document.getElementById("pronomes").value;
    let profissional = document.getElementById("profissional").value;

    let json = {
        "nome": nome,
        "usuario": usuario,
        "email": email,
        "senha": senha,
        "CPF": CPF,
        "celular": celular,
        "nascimento": nascimento,
        "pronome": pronome,
        "profissional": !!profissional
    };
    console.log(json);

    //limpa todos os campos
    document.getElementById("nome").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("repita_senha").value = "";
    document.getElementById("CPF").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("nascimento").value = "";
}


function validation_register() {
    //validar nome, nome não pode ser vazio
    let errorMessageArray = [];
    let nome = document.getElementById("nome");
    if (nome.value == "") {
        errorMessageArray.push("Nome não pode ser vazio!");
        if (!nome.classList.contains("error")) nome.classList.add("error");
    }

    //validar usuario, usuario não pode ser vazio
    let usuario = document.getElementById("usuario");
    if (usuario.value == "") {
        errorMessageArray.push("Usuário não pode ser vazio!");
        if (!usuario.classList.contains("error")) usuario.classList.add("error");
    }

    //validar email, email não pode ser vazio
    //email deve ser um email válido
    let email = document.getElementById("email");
    if (email.value == "") {
        errorMessageArray.push("Email não pode ser vazio!");
        if (!email.classList.contains("error")) email.classList.add("error");
    }
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        errorMessageArray.push("Email inválido!");
        if (!email.classList.contains("error")) email.classList.add("error");
    }

    //validar senha, senha não pode ser vazio
    //validar senha, senha deve ter mais de 8 caracters
    //validar senha, senha deve ser igual a confirmação de senha
    //validar confirmação de senha, confirmação de senha não pode ser vazio
    let senha = document.getElementById("senha");
    let confirmarSenha = document.getElementById("repita_senha");
    if (senha.value == "") {
        errorMessageArray.push("Senha não pode ser vazio!");
        if (!senha.classList.contains("error")) senha.classList.add("error");
    }
    if (senha.value.length < 8) {
        errorMessageArray.push("Senha deve ter mais de 8 caracteres!");
        if (!senha.classList.contains("error")) senha.classList.add("error");
    }
    if (senha.value != confirmarSenha.value) {
        errorMessageArray.push("Senha deve ser igual a confirmação de senha!");
        if (!senha.classList.contains("error")) senha.classList.add("error");
    }
    if (confirmarSenha.value == "") {
        errorMessageArray.push("Confirmação de senha não pode ser vazio!");
        if (!confirmarSenha.classList.contains("error")) confirmarSenha.classList.add("error");
    }

    //validar cpf, cpf deve ser um cpf válido
    //o digito verificador do cpf deve ser válido
    let cpf = document.getElementById("CPF");
    if (cpf.value != "") {
        if (cpf.value.length != 14) {
            errorMessageArray.push("CPF deve ter 11 caracteres!");
            if (!cpf.classList.contains("error")) cpf.classList.add("error");
        }
        //https://homepages.dcc.ufmg.br/~rodolfo/aedsi-2-10/regrasDigitosVerificadoresCPF.html
        let cpfSemMascara = cpf.value.replace(/\D/g, "");
        let cpfArray = cpfSemMascara.split("");
        let digitoVerificador1 = cpfArray[9];
        let digitoVerificador2 = cpfArray[10];
        let soma1 = 0;
        let soma2 = 0;
        for (let i = 0; i < 9; i++) {
            soma1 += cpfArray[i] * (10 - i);
            soma2 += cpfArray[i] * (11 - i);
        }
        let resto1 = (soma1 * 10) % 11;
        let resto2 = (soma2 * 10) % 11;
        if (resto1 == 10) resto1 = 0;
        if (resto2 == 10) resto2 = 0;
        if (resto1 != digitoVerificador1 || resto2 != digitoVerificador2) {
            errorMessageArray.push("CPF inválido!");
            if (!cpf.classList.contains("error")) cpf.classList.add("error");
        }
    }


    if (errorMessageArray.length > 0)
        alert(errorMessageArray.join("\n"));
    else {
        cadastrar();
        alert("Cadastro realizado com sucesso!");
    }

    //validar celular, celular pode ser vazio
    //caso não esteja vazio, celular deve ser um celular válido
    //celular válido é um celular que começa com 9 e tem 11 caracteres
    let celular = document.getElementById("celular");
    if (celular.value != "") {
        if (celular.value.length != 15) {
            errorMessageArray.push("Celular deve ter 11 caracteres!");
            if (!celular.classList.contains("error")) celular.classList.add("error");
        }
        if (celular.value[5] != "9") {
            errorMessageArray.push("Celular deve começar com 9!");
            if (!celular.classList.contains("error")) celular.classList.add("error");
        }
    }

    //validar nacimento, nascimento pode ser vazio
    //caso não esteja vazio, nascimento deve ser uma data válida
    //uma data valida é uma data que não é maior que a data atual
    //uma data valida é uma data que não é menor que 01/01/1900
    let nascimento = document.getElementById("nascimento");
    if (nascimento.value != "") {
        let dataNascimento = new Date(nascimento.value);
        let dataAtual = new Date();
        let dataMinima = new Date("1900-01-01");
        if (dataNascimento > dataAtual) {
            errorMessageArray.push("Data de nascimento não pode ser maior que a data atual!");
            if (!nascimento.classList.contains("error")) nascimento.classList.add("error");
        }
        if (dataNascimento < dataMinima) {
            errorMessageArray.push("Data de nascimento não pode ser menor que 01/01/1900!");
            if (!nascimento.classList.contains("error")) nascimento.classList.add("error");
        }
    }
}



document.getElementById("cadastrar").addEventListener("click", function (event) {
    event.preventDefault();
    validation_register();
});

document.getElementById("nome").addEventListener("input", function () {
    this.classList.remove("error");
});

document.getElementById("usuario").addEventListener("input", function () {
    this.classList.remove("error");
});

document.getElementById("email").addEventListener("input", function () {
    this.classList.remove("error");
});

document.getElementById("senha").addEventListener("input", function () {
    this.classList.remove("error");
});

document.getElementById("repita_senha").addEventListener("input", function () {
    this.classList.remove("error");
});

document.getElementById("CPF").addEventListener("input", function () {
    this.classList.remove("error");
});

document.getElementById("celular").addEventListener("input", function () {
    this.classList.remove("error");
});

document.getElementById("nascimento").addEventListener("input", function () {
    this.classList.remove("error");
});