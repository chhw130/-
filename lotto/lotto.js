const $result = document.querySelector("#result")
const $bonus = document.querySelector("#bonus")

const candidate = Array(45).fill().map((v, i) => i + 1); //1~45까지 숫자를 배열에 넣음
const shuffle = [];

while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1); //뽑아낸 랜덤번째 수를 candidate 배열에서 제거
    const value = spliceArray[0];
    shuffle.push(value); //그 수를 shuffle에 저장
}

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b); // slice 사용하여  shuffle배열의 원본을 바꾸지 않음.
const bonus = shuffle[6];


function lottoNumber(number, $target) {
    const $ball = document.createElement('div');
    $ball.className = 'ball'
    $ball.textContent = number;
    $target.appendChild($ball);

    if(number > 39){
            $ball.style.backgroundColor = "green";
            $ball.style.color = "white";}
    else if( number > 29 ){
            $ball.style.backgroundColor = "blue";
            $ball.style.color = 'white';}
    else if(number > 19){
            $ball.style.backgroundColor = "yellow";
            $ball.style.color = 'black';}
    else if(number > 9){
            $ball.style.backgroundColor = "orange";
            $ball.style.color = 'white';}
    else if(number < 10){
            $ball.style.backgroundColor = "red";
            $ball.style.color = 'white';
    }
}

for (let i = 0; i < 6; i++) {
    setTimeout(() => {
        lottoNumber(winBalls[i], $result);
    }, (i + 1) * 1000);
}

setTimeout(() => {
    lottoNumber(bonus, $bonus)
}, 7500)
