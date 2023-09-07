const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const select3 = document.querySelector('#select3');
const parrafo = document.querySelector('#parrafo');
const button = document.querySelector('#btn');

function clickboton() {

    const select1Value = select1.value;
    const select2Value = select2.value;
    const select3Value = select3.value;

    const password = select1Value + select2Value + select3Value;

    //const btn = document.querySelector('#btn');
    if (password == 911) {
        parrafo.innerHTML = 'Contraseña 1 es correcta';
        console.log(password)
    } else if (password == 714) {
        parrafo.innerHTML = 'Contraseña 2 es correcta';
    } else {
        parrafo.innerHTML = 'Contraseña incorrecta';
    }
}

document.querySelector('#btn').onclick = function () {
    clickboton();
}