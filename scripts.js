function OPERATE(a, b, semn) {
    if(b == 0 && semn == '/') return "Haha you can't do that"
    else if (semn == "+") return a + b;
    else if (semn == "-") return a - b;
    else if (semn == "x") return a * b;
    else if (semn == "/") return a / b;
}

function afisare() {
    const ecran = document.querySelector('.afisajsiecran');
    const butoane = document.querySelectorAll('button');
    let cnt = 0, element1, element2, butonApasat;
    butoane.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.classList.contains('stergeretot'))
            {
                cnt = 0;
                ecran.textContent = "";
                return;
            }
            else if(button.classList.contains('stergere'))
            {
                if (ecran.textContent.length > 0)
                    ecran.textContent = ecran.textContent.slice(0, -1);
            }
            else if (button.classList.contains('virgula')) {
                if (ecran.textContent == "") {
                    ecran.textContent = "0.";
                } else if (!ecran.textContent.includes('.')) {
                    ecran.textContent += '.';
                }
            }
            else if ((button.classList.contains('plus') || button.classList.contains('minus') || button.classList.contains('inmultit') || button.classList.contains('impartire')) && cnt === 0) {
                if(!ecran.textContent)
                    return;
                element1 = parseFloat(ecran.textContent);
                cnt = 1;
                butonApasat = button.textContent;
                ecran.textContent = "";
            }
            else if ((button.classList.contains('egal') || button.classList.contains('plus') || button.classList.contains('minus') || button.classList.contains('inmultit') || button.classList.contains('impartire')) && cnt === 1) {
                element2 = parseFloat(ecran.textContent);
                ecran.textContent = OPERATE(element1, element2, butonApasat);
                cnt = 0;
                if(!button.classList.contains('egal'))
                {
                    element1 = ecran.textContent;
                    butonApasat = button.textContent;
                    cnt = 1;
                    ecran.textContent = "";
                }
            }
            else if (!button.classList.contains('plus') && !button.classList.contains('minus') && !button.classList.contains('inmultit') && !button.classList.contains('impartire') && !button.classList.contains('egal')) {
                ecran.textContent += button.textContent;
            }
        });
    });
}

afisare();
