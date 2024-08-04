const input = document.querySelector('.input');
const input2 = document.querySelector('.input2');
let par = document.querySelector('.par');
let form = document.querySelector('form');
const button = document.querySelector('.btn');

form.onsubmit = function(evt) {
    evt.preventDefault();
    if (input.value < 100 || input.value > 300) {
        par.textContent = 'число вне диапазона от 100 до 300';
        
        return false;
    } else if (input2.value < 100 || input2.value > 300) {
        par.textContent = 'число вне диапазона от 100 до 300';
        return false;
    } else {
        fetch('https://dummyimage.com/' + input.value + 'x' + input2.value)

        .then(response => response.blob())
        .then(blob => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            par.appendChild(img);
            });
        par.textContent = '';
    } 
};
 
