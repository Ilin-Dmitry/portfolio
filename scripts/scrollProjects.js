const projectNumbersList = document.querySelectorAll('.project__number');

// Sliding project cards
document.addEventListener('scroll', () => {
    projectNumbersList.forEach((num, i) => {
        num.setAttribute('data-value', num.textContent)
        if (i % 2 === 0 && num.getBoundingClientRect().top + 150 < window.innerHeight) {
            num.style.transform = 'translateX(0rem)'
            num.style.opacity = '.7'
            num.parentElement.style.transform = 'translateX(0rem)'
            num.parentElement.style.opacity = '1'
        } else if (num.getBoundingClientRect().top + 150 < window.innerHeight) {
            num.style.transform = 'translateX(0rem)'
            num.style.opacity = '.7'
            num.parentElement.style.transform = 'translateX(0rem)'
            num.parentElement.style.opacity = '1'
        }
    })
})

