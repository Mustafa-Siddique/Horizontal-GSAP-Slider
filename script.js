const btnNxt = document.querySelector('.nxt')
const btnPrv = document.querySelector('.prev')
const container = document.querySelector('.container')
const slides = Array.from(document.querySelectorAll('.slider'))
const indexIndication = document.querySelector('.counter span:nth-child(1)')

let index = 0;

function slideNxt(){

    const TLRIGHT = gsap.timeline()

    TLRIGHT
    .set(indexIndication, {innerText: index + 1})
    .to(slides[index], {duration: 0.6, x: 0})

}

function slidePrv() {
    
    const TLLEFT = gsap.timeline()

    TLLEFT
    .set(indexIndication, {innerText: index})
    .to(slides[index], {duration: 0.6, x: '-100%'})
}

function negation() {
    gsap.to(container, {
        keyframes:[
            {duration: 0.1, x: -4},
            {duration: 0.1, x: 4},
            {duration: 0.1, x: -4},
            {duration: 0.1, x: 0},
        ]
    })
}

function handleDirection(direction) {
    if (direction === 'nxt') {
        if(index === slides.length - 1){
        negation();
        return;;
        }
        index++;
        slideNxt();
    }
    else if (direction === 'prev') {
        if (index === 0) {
        negation();
        return;
        }
        slidePrv();
        index--;
    }
}

btnNxt.addEventListener('click', () => {
    handleDirection('nxt');
})

btnPrv.addEventListener('click', () => {
    handleDirection('prev');
})