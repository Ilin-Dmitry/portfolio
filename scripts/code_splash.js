const codeText = `argin-bottom:3rem}.card__price-value{font-size:4rem}}.story{background-color:rgba(247,247,247`
const codeSplash1 = document.querySelector('.code_splash_1')
const codeSplash2 = document.querySelector('.code_splash_2')
const codeSplash3 = document.querySelector('.code_splash_3')

const color = ['rgba(121,193,228,1)', 'rgba(54,189,159,1)', 'rgba(203,222,135,1)', 'rgba(167,125,203,1)', 'rgba(226,127,230,1)']
document.head.appendChild(document.createElement("style"))
const styleElem = document.querySelector('style')
// splash 1
setInterval(() => {
    // Плавное появление
    codeSplash1.style.transition = 'opacity 1.5s'
    codeSplash1.style.opacity = 0.7
    const bgColor = color[Math.round(Math.random() * (color.length - 1))];
    codeSplash1.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0)5%, ${bgColor}, rgba(0, 0, 0, 0)60%)`
    // codeSplash1.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0)5%, red,  rgba(0, 0, 0, 0)60%)`
    
    codeSplash1.textContent = codeText;
    codeSplash1.style.top = `${Math.round(Math.random() * window.innerHeight)}px`;
    codeSplash1.style.left = `${Math.round(Math.random() * window.innerWidth)}px`;

    // Добавление псевдо-элемента для передвижения тени
    
    styleElem.textContent = `.code_splash .code_splash::after {content: 'hello hello'!important, background-color: red!important;  }`
    console.log('style', styleElem)
    // Перемещение градиента
       setTimeout(() => {
        // const styleElem = document.querySelector(style)
        styleElem.innerHTML = `.code_splash::after {content: 'vgfjgkgljglgljgluglgkjg'!important, background-image: linear-gradient(to right, rgba(0, 0, 0, 0)05%, ${bgColor}, rgba(0, 0, 0, 0)60%)!important; transition: all 2s !important;}`

    }, 1500);
    //Затухание
    setTimeout(() => {
        codeSplash1.style.opacity = '0'
        codeSplash1.style.transition = 'opacity 1.5s, background-image 1.5s'
    }, 3000);
    
    setTimeout(() => {
        codeSplash1.style.transition = 'opacity 0s'
    }, 4500);
}, 4500);

