let numOne = '';
let operator = '';
let numTwo = '';

const Oper = document.querySelector("#operator")
const result = document.querySelector("#result")

const numCal = () => {
    numOne = result.value;
    operator = '';
    numTwo = '';
}

const onClickNumber = (number) => () => {
    if (!operator) {
        numOne += number;
        result.value += number;
        return;
    }
    if (!numTwo) {
        result.value = '';
        numTwo += number;


        switch (operator) {
            case '+':
                result.value = parseInt(numOne) + parseInt(numTwo)

                break;
            case '-':
                result.value = numOne - numTwo
                break;
            case '/':
                result.value = numOne / numTwo
                break;
            case 'x':
                result.value = numOne * numTwo
                break;
        }
        numCal();
    }
}


document.querySelector('#num0').addEventListener("click", onClickNumber('0'))
document.querySelector('#num1').addEventListener("click", onClickNumber('1'));
document.querySelector('#num2').addEventListener("click", onClickNumber('2'));
document.querySelector('#num3').addEventListener("click", onClickNumber('3'));
document.querySelector('#num4').addEventListener("click", onClickNumber('4'));
document.querySelector('#num5').addEventListener("click", onClickNumber('5'));
document.querySelector('#num6').addEventListener("click", onClickNumber('6'));
document.querySelector('#num7').addEventListener("click", onClickNumber('7'));
document.querySelector('#num8').addEventListener("click", onClickNumber('8'));
document.querySelector('#num9').addEventListener("click", onClickNumber('9'));


const onClickOperator = (op) => () => {
    if (numOne) {
        operator = op;
        Oper.value = operator;
    } else {
        alert("숫자를 넣으세요!")
    }
}

document.querySelector('#plus').addEventListener("click", onClickOperator('+'));
document.querySelector('#minus').addEventListener("click", () => {
    if (!numOne) {
        numOne += '-';
        Oper.value = '-';
    } else {
        operator = '-';
        Oper.value = operator;
    }
});
document.querySelector('#divide').addEventListener("click", onClickOperator('/'));
document.querySelector('#multiple').addEventListener("click", onClickOperator('x'));
document.querySelector('#calculate').addEventListener("click", () => {
    if (numTwo) {
        switch (operator) {
            case '+':
                result.value = parseInt(numOne) + parseInt(numTwo)
                break;
            case '-':
                result.value = numOne - numTwo
                break;
            case '/':
                result.value = numOne / numTwo
                break;
            case 'x':
                result.value = numOne * numTwo
                break;
        }
    }
    numCal();
});
document.querySelector('#clear').addEventListener("click", () => {
    numOne = '';
    operator = '';
    numTwo = '';
    Oper.value = '';
    result.value = '';
})


