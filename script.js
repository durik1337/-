const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');


buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;
        if (buttonText === 'C') {
            display.value = '';
        }

        else if (buttonText === '=') {
            display.value = eval(display.value);
        }

        else {
            display.value += buttonText;
        }
    });
});