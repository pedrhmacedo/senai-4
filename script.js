const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const email = document.getElementById("email")
const botaoentrar = document.getElementById("entrar");

botaoentrar.addEventListener("click",function (event){
    event.preventDefault();
    const nomeUsuario = usuario.value;
    const senhaDigitada = senha.value;
    const emailDigitado = email.value;

    if (nomeUsuario === "pequenoprincipe" &&
        senhaDigitada === "principe123" && 
        emailDigitado === "pequenoprincipe@gmail.com") {
        alert("Bem-vindo a Biblioteca!");
        window.location.href = 'biblioteca.html';
    } else {
        alert("Acesso negado!");
    }   
});