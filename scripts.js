function ADD (a, b) {
    return a + b;
}

function SUB (a, b) {
    return a - b;
}

function DIV (a, b) {
    return a / b;
}

function MUL (a, b) {
    return a * b;
}

let var1, var2;

function OPERATE (a, b, semn) {
    if (semn == "+") return a + b;
    else if (semn == "-") return a - b;
    else if (semn == "*") return a * b;
    else if (semn == "/") return a / b;
}

const ecran = document.querySelector('.afisajsiecran');
const butoane = document.querySelectorAll('button');

function afisare() {
    butoane.forEach((button) => {
        button.addEventListener('click', () => {
            ecran.textContent = ecran.textContent + ' ' + button.textContent;
        });
    })
}

afisare();
