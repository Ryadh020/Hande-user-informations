// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

const hobbies = document.getElementById('hobbies');

function checkbox(n) {
    hobbies.childNodes[n].childNodes[1].addEventListener("change",(event)=> {
            event.target.checked?hobbiesResult.childNodes[n].classList.remove("text-secondary"):
            hobbiesResult.childNodes[n].classList.add("text-secondary");
    })
}
checkbox(1);
checkbox(3);
checkbox(5);