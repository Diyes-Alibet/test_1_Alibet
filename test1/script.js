// number 1
function number (str) {
    const regExp = /^[0-9]+$/;
    return regExp.test(str);
}
console.log(number("012345698745665"));
console.log(number("Alex548948595"));

// number 2

let interval = 0

function setup() {
    interval = setInterval(() => {
        interval++
        console.log(interval + ' прошла секунда')
    },1000)
}
setup()

//number 5

const request = new XMLHttpRequest();
request.open("GET", 'main.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();
request.onload = function () {
    const main = JSON.parse(request.response);
    console.log(main);
}
// number 3
const count = () => {
    let i = 0;
    const interval = setInterval(() => {
        i++
        console.log(i)
        if (i === 10) {
            clearInterval(interval)
        }
    },1000);
}
count()

// number 4
const block = document.getElementById('backgroundBlock');

block.addEventListener('click', function() {
    block.classList.toggle('bg-color');
});













