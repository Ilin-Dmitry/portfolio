const projectNumbers = document.querySelectorAll('.project__number');
const projectsArray = document.querySelectorAll('.project');

projectNumbers.forEach((number, i) => {
    number.textContent = '0' + (i + 1);
})

projectsArray.forEach(project => {
    const img = project.querySelector('.project__img')
    console.log('img =>', img)
})
