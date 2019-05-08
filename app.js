// DOM ELEMENT REFERENCES
const hobbies = document.getElementById('hobbies');
const music = document.getElementById('music');
const transport = document.getElementById('transport');
const select = document.getElementById('music-preference');

const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');
const shoxMusic = document.getElementById('shoxMusic');

musicResult.textContent = select.value;

// CHECKBOX LISTENERS :
function checkbox(n) {
    hobbies.childNodes[n].childNodes[1].addEventListener("change",(event)=> {
        event.target.checked?hobbiesResult.childNodes[n].classList.remove("text-secondary"):
        hobbiesResult.childNodes[n].classList.add("text-secondary");
        if(n === 5 && event.target.checked) {
            music.style.display = "block";
            shoxMusic.style.display = "block";
        }else if(!event.target.checked) {
            music.style.display = "none";
            shoxMusic.style.display = "none";
        }
    })
}
checkbox(1); checkbox(3); checkbox(5);

// RADIO BUTTONS :
for(let i = 1; i<=5 ;i+=2) {
    transport.childNodes[i].childNodes[1].addEventListener("click",(event)=> {
        let valueOfElement = event.target.value ;
        transportResult.textContent = valueOfElement;
    })
}

// THE DROPDOWN MENUS :
    select.addEventListener("change",(event)=> {
        let valueOfElement = event.target.value ;
        musicResult.textContent = valueOfElement;
    })