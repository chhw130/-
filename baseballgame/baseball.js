
const form = document.querySelector("#form")
const input = document.querySelector("#input")
const $logs = document.querySelector("#logs")

const tries = [];



const randomNumber = [];
for (let n = 0; n < 10; n++) {
    randomNumber.push(n);
}   // [0, 1, 2 ,3 ,4 ,5, 6, 7, 8, 9]



const answer = []
for (let n = 0; n < 4; n++) {
    const index = Math.floor(Math.random() * randomNumber.length);
    answer.push(randomNumber[index]);
    randomNumber.splice(index, 1);
}
// ex) randomnumber.length 10  >> math radnom(0.2) >> ramdnomnumber[2]

let out = 0;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    if (checkInput(value)) {
        if (answer.join('') === value) {  // join 배열의 모든 함수 ''형식으로 합치기 >> ex[1,2,3,4].join(':') = '1:2:3:4'
            $logs.textContent = '홈런!';
            return;
        }
        if (tries.length >= 9) {
            const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
            $logs.appendChild(message);
            return;
        }
        let strike = 0;
        let ball = 0;
        // ex) answer = 1247  value = 7143  1strike 3ball
        for (let i = 0; i < answer.length; i++) {
            const index = value.indexOf(answer[i]);         //indexof 겹치는숫자 찾기 어디에 있는지 까지 알려줌
            if (index > -1) {
                if (index === i) {
                    strike += 1;
                } else {
                    ball += 1;
                }
            }
        }
        if (strike == 0 && ball == 0) {
            $logs.append(`${value} : out!`, document.createElement('br'))
            out++;
        } else {
            $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'))
        }
        if (out === 3) {
            $logs.append(`패배! 정답은 ${answer.join('')}`);
            return;
        }
        
    }
    tries.push(value);
});

function checkInput(input) {
    if (input.length !== 4) {
        return alert('4자리 숫자를 입력하세요.')
    } if (new Set(input).size !== 4) {
        return alert('중복되지 않게 입력하세요.')           //input 배열 요소 중복되는지 확인
    } if (tries.includes(input)) {                        
        return alert('이미 시도한 값입니다.')               //input 값 자체 중복 확인
    }
    return true;
}

 