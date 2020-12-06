const spans = document.querySelectorAll('span.active')
const ul = document.querySelector('ul')

spans.forEach(span => {
    span.addEventListener('click', () => {
        ul.classList.toggle('active')
    })
})
