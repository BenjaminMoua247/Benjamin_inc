const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0
blurring()
function blurring(){
    load++;
    loadText.innerText = `${load}`
    bg.style.filter = "blur(5px)"
    loadText.style.opacity = "0.5"
}