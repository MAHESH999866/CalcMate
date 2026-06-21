const screen = document.getElementById('screen');


function appendValue(value) {
    if (screen.value === '0' && value !== '.') {
        screen.value = value;
    } else {
        screen.value += value;
    }
}


function clearScreen() {
    screen.value = '0';
}


function calculateResult() {
    try {
       
        const result = Function('"use strict";return (' + screen.value + ')')();
        screen.value = result !== undefined ? result : '0';
    } catch (error) {
        screen.value = 'Error';
    }
}