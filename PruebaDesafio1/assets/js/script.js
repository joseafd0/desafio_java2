const img = document.querySelector('#img');


function clickborder() {
    const img = document.querySelector('#img');
    if (img.style.border === '2px solid red') {
        img.style.border = 'none';
    } else {
        img.style.border = '2px solid red'
    }
}

document.querySelector('#img').onclick = function () {
    clickborder();
}