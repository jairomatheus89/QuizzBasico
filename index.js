const buttons = [
    '7','8','9','/',
    '4','5','6','+',
    '1','2','3','-',
    'C','0','*','=',
]

const calculator = document.getElementById("calculatorDiv");

const inputDisplay = document.getElementById("displayRes");

let calculatorResult = document.getElementById("CalculatorResult");

buttons.forEach(value => {
    const button = document.createElement("buttons");
    button.innerText = value;
    button.classList.add("buttons");

    button.addEventListener("click", () => {
        console.log("buttonclicked: ",value);   
        if(value === "="){

            let displayExp = inputDisplay.innerText;
            let result = eval(displayExp);

            console.log(`The result of expression is: ${result}`);
            calculatorResult.innerText = `The result is: ${result}`;
            
            inputDisplay.innerText = "";

        }else if (value === "C") {
            console.log("cleaning Display!");
            inputDisplay.innerText = "";
        } else {
            inputDisplay.innerText += value;
        }

    })

    calculator.appendChild(button);
});