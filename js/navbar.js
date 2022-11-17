const botaoCategoria = document.querySelector('.categoria-menu')
const menu = document.querySelector('menu-sub')

botaoCategoria.addEventListener('click', () => {
    menu.classList.toggle('menu-escondido--ativo')
})