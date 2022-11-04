const number = parseInt(prompt("몇 명이 참가하나요?"));

if(number){

const word = document.querySelector("#word")
const order = document.querySelector("#order")
const button = document.querySelector("button")
const text = document.querySelector("#text")
const input = document.querySelector("input")
let newWord;
let partWord;

function onInput(event) {
    newWord = event.target.value;
}


function buttonEvent() {
    if (!partWord || newWord[0] === partWord[partWord.length - 1] && partWord === 3) {
        partWord = newWord;
        word.textContent = partWord;
        input.value = ""
        input.focus();
        const turn = parseInt(order.textContent)
        if (turn === number) {
            order.innerText = 1;
        } else {
            order.innerText = turn + 1;
        }
    }
        else {
            alert("틀렸습니다!")
            input.value = ""
            input.focus();
        }
    }

button.addEventListener("click", buttonEvent)
input.addEventListener("input", onInput)
}