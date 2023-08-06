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