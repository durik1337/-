const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonId = button.id;
        if (buttonId === 'clear') {
            display.value = '';
        }
        else if (buttonId === 'equal') {
            display.value = eval(display.value);
        }
        else {
            display.value += button.textContent;
        }
    });
});