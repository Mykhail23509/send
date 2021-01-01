function alertHello() {
    let str = "";
    let divElem = document.querySelector('.nudeContainer');

    for (let i = 0; i < 5000; i++) {
        str = str + 'SEND NUDES '
        divElem.innerHTML = str + 'SEND NUDES';

    }
    console.log(str);
}

setInterval(() => alertHello(), 2000)