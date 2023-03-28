const projectNumbers = document.querySelectorAll('.project__number');

projectNumbers.forEach((number, i) => {
    number.textContent = '0' + (i + 1);
})
