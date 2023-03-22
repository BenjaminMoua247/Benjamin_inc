const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0
blurring()
function blurring(){
    load++;
    bg.style.filter = ``
    loadText.innerText = "load"
    loadText.style.opacity = "0.5"
}