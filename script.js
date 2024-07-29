// Event Listener on load of page
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach((header) => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const img = this.querySelector('img');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
                img.src = './assets/images/icon-plus.svg';
            } else {
                content.style.display = 'block';
                img.src = './assets/images/icon-minus.svg';
            }
        })
    })
})