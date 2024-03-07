let a;
let b;
let form = document.getElementById("formulario");
let mensagem = document.getElementById("mensagem-retorno");
let campoA = document.getElementById("numero-a");
let campoB = document.getElementById("numero-b");
let botao = document.getElementById("botao-submit");

form.addEventListener("submit", function(e){
    e.preventDefault();
})

campoA.addEventListener("keyup", function(){
    a = campoA.value;
    b = campoB.value;
    mensagem.classList.remove("valid");
    mensagem.classList.remove("invalid");
    mensagem.innerHTML = "";
    if (a == "" || b == "")
    {
        botao.disabled = true;
    }
    else {
        botao.disabled = false;
    }
})

campoB.addEventListener("keyup", function(){
    a = campoA.value;
    b = campoB.value;
    mensagem.classList.remove("valid");
    mensagem.classList.remove("invalid");
    mensagem.innerHTML = "";
    if (a == "" || b == "")
    {
        botao.disabled = true;
    }
    else {
        botao.disabled = false;
    }
})

botao.addEventListener("click", function() {
    a = parseInt(a);
    b = parseInt(b);
    if (a > b) {
        mensagem.innerHTML = `Formulário inválido, o número A (${a}) deve ser menor que o número B (${b})`;
        mensagem.classList.add("invalid");
    }
    else {
        mensagem.innerHTML = `Parabéns, formulário submetido com sucesso, o número A (${a}) é  menor que o número B (${b})`;
        mensagem.classList.add("valid");
    }
})

