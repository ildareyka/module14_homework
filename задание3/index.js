const input = document.querySelector('input');
let par = document.querySelector('.par');
let form = document.querySelector('form');
const button = document.querySelector('.btn');

form.onsubmit = function(evt) {
    evt.preventDefault();
    if (input.value < 1 || input.value > 10) {
        par.textContent = 'число вне диапазона от 1 до 10';
        document.querySelector('.result').innerHTML = '';
        return false;
    } else {
        par.textContent = '';
        getPhotos();
        }
  };

function getPhotos() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.status === 200) {
            let photos = JSON.parse(this.responseText);
            let output = '';
            for (let i = 0; i < photos.length; i++) {
                output += '<img src="' + photos[i].url + '" alt="Photo ' + (i+1) + '">';
            }
            document.querySelector('.result').innerHTML = output;
        } else {
            console.error('Ошибка при получении данных: ', this.status);
        }
    };

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?_limit=' + input.value, true);
    xhr.send();
}




