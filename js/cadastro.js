
/**
 * @param {HTMLInputElement} input 
 * @returns 
 */
function maskCpf(input) {
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

document.getElementById("cadastrar").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
    //window.location.href = "index.html";
});