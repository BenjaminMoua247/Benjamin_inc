const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})