const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const input3 = document.querySelector('#input-3');
const parrafo = document.querySelector('#parrafo');
const button = document.querySelector('#btn');

function clickboton() {

    const input1Value = input1.value;
    const input2Value = input2.value;
    const input3Value = input3.value;

    const total = Number(input1Value) + Number(input2Value) + Number(input3Value);  

    const btn = document.querySelector('#btn');
    if (Number(total) <= 10) {
        parrafo.innerHTML = 'Llevas ' + total + ' stickers';
    } else if (Number(total) > 10) {
        parrafo.innerHTML = 'Llevas demasiados stickers';
    }
}

document.querySelector('#btn').onclick = function () {
    clickboton();
}