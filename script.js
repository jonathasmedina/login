/*
- register = criar conta = sign-up
- login = entrar = sign-in
*/

const container = document.getElementById('container');
const criarBtn = document.getElementById('register');
const logarBtn = document.getElementById('login');

criarBtn.addEventListener('click', () => {
    container.classList.add("painelAtivo");
});

logarBtn.addEventListener('click', () => {
    container.classList.remove("painelAtivo");
});