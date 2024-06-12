document.addEventListener('DOMContentLoaded', () => {
    const titleQuestions = document.querySelectorAll('.title-question');

    titleQuestions.forEach(container => {
        container.addEventListener('click', () => {
            const textDiv = container.nextElementSibling;
            const image = container.querySelector('.toggleImage');
            
            if (textDiv.classList.contains('hidden')) {
                textDiv.classList.remove('hidden');
                image.src = 'images/icon-minus.svg';
                image.alt = 'minus';
            } else {
                textDiv.classList.add('hidden');
                image.src = 'images/icon-plus.svg';
                image.alt = 'plus';
            }
        });
    });
});
