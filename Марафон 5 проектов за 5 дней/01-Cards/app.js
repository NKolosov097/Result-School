const slides = document.querySelectorAll('.slide');

function clearActiveClasses () {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}
