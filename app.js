// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

const sportsCheckbox = document.getElementById('sports-checkbox');
const gamesCheckbox = document.getElementById('games-checkbox');
const musicCheckbox = document.getElementById('music-checkbox');

const hobbies = document.getElementById('hobbies');


/*
sportsCheckbox.addEventListener("change",(event)=> {
    event.target.checked?hobbiesResult.firstElementChild.classList.remove("text-secondary"):
    hobbiesResult.firstElementChild.classList.add("text-secondary");
})

gamesCheckbox.addEventListener("change",(event)=> {
    event.target.checked?hobbiesResult.firstElementChild.classList.remove("text-secondary"):
    hobbiesResult.firstElementChild.classList.add("text-secondary");
})
*/


function checkbox(n) {

    hobbies.childNodes[n].childNodes[1].addEventListener("change",(event)=> {

      //  let element = event.target;
      //  let elementNature = element.attributes.id.value;

      //  if(elementNature === "sports-checkbox") {
            event.target.checked?hobbiesResult.childNodes[n].classList.remove("text-secondary"):
            hobbiesResult.childNodes[n].classList.add("text-secondary");
     //   }

    })

}
checkbox(1);
checkbox(3);
checkbox(5);