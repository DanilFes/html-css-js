document.querySelector('.btn').addEventListener('click', myButton);

function myButton() {
    greating = document.querySelector('#greating-text').value;
    document.querySelector('.yourGreating').innerHTML = greating;
};