let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 350;
        let height = sec.offsetHeight;

        if (top>= offset && top < offset + height) {
            sec.classList.add('animate')
        } 

        else {
            sec.classList.remove('animate')
        }
    })
}

window.addEventListener('load', function () {
    transition.classList.add('active')
})
let transition = document.querySelector('nav')

window.addEventListener('load', function () {
    trans.classList.add('active1')
})
let trans = document.querySelector('header')

window.addEventListener('load', function () {
    transis.classList.add('active2')
})
let transis = document.querySelector('.list2')

window.addEventListener('load', function () {
    transist.classList.add('active3')
})
let transist = document.querySelector('.keranjang')