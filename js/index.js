const home = document.querySelector('.home')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    home.classList.toggle('active')
    input.focus()
})