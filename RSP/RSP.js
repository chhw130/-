const $computer = document.querySelector("#computer")
const $score = document.querySelector("#score")
const $rock = document.querySelector("#rock")
const $scissors = document.querySelector("#scissors")
const $paper = document.querySelector("#paper")


const IMG_URL = 'rsp.png';
$computer.style.background = `url(${IMG_URL}) -0 0`;
$computer.style.backgroundSize = 'auto 200px';


const rspX = {
    scissors: '0',
    rock: '-220px',
    paper: '-440px'
}

let computerChoice = '0';
const changeRSP = (computerChoice) => {
    $computer.style.background = `url(${IMG_URL}) ${computerChoice} 0`;
    $computer.style.backgroundSize = 'auto 200px';
}

const intervalId = setInterval(() => {
    if (computerChoice === rspX.scissors) {
        computerChoice = rspX.rock
        changeRSP(computerChoice);
    }
    else if (computerChoice === rspX.rock) {
        computerChoice = rspX.paper
        changeRSP(computerChoice);
    }

    else if (computerChoice === rspX.paper) {
        computerChoice = rspX.scissors
        changeRSP(computerChoice);
    }
}, 50)


const clickButton = () => {
    clearInterval(intervalId);

    setTimeout(() => {
        clearInterval(intervalId);
        intervalId;
    }, 1000);
};
$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);