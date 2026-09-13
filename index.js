const display = document.querySelector('.display');

function appendToDisplay(value) {
    if (display.value.length < 12) {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace (/×/g, '*').replace(/÷/g, '/');

        if (expression.includes('%')) {
            expression = expression.replace(/%/g, '/100');
        }

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
    
}


document.getElementById('one') .addEventListener('click', () => appendToDisplay('1'));
document.getElementById('two') .addEventListener('click', () => appendToDisplay('2'));
document.getElementById('three') .addEventListener('click', () => appendToDisplay('3'));
document.getElementById('four') .addEventListener('click', () => appendToDisplay('4'));
document.getElementById('five') .addEventListener('click', () => appendToDisplay('5'));
document.getElementById('six') .addEventListener('click', () => appendToDisplay('6'));
document.getElementById('seven') .addEventListener('click', () => appendToDisplay('7'));
document.getElementById('eight') .addEventListener('click', () => appendToDisplay('8'));
document.getElementById('nine') .addEventListener('click', () => appendToDisplay('9'));
document.getElementById('zero') .addEventListener('click', () => appendToDisplay('0'));
document.getElementById('doubleZero') .addEventListener('click', () => appendToDisplay('00'));
document.getElementById('dot') .addEventListener('click', () => appendToDisplay('.'));


document.getElementById('addition') .addEventListener('click', () => appendToDisplay('+'));
document.getElementById('subtraction') .addEventListener('click', () => appendToDisplay('-'));
document.getElementById('multiplication') .addEventListener('click', () => appendToDisplay('×'));
document.getElementById('divison') .addEventListener('click', () => appendToDisplay('÷'));
document.getElementById('percent') .addEventListener('click', () => appendToDisplay('%'));


document.getElementById('reset') .addEventListener('click', clearDisplay);
document.getElementById('delete') .addEventListener('click', deleteLast);
document.getElementById('eqal') .addEventListener('click', calculate);
