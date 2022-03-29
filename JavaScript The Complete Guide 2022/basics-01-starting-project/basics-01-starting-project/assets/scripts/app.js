const defaultResult = 0;

let currentResult = defaultResult;
let logEntries=[];


function getInputNumber(){
    return userInput.value;
}
function writeToLog(operators, preResult, operationNumber, newResult){
    const logentry={
        operator : operators,
        prevResult : preResult,
        number: operationNumber,
        result: newResult

    };
    logEntries.push(logentry);
    console.log(logEntries);
}

function createAndWriteRes(operator, prevNumber, enteredNumber){
    const calculationDiscription = `${prevNumber} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calculationDiscription);
}

function add(){
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult += parseInt(enteredNumber);
    createAndWriteRes('+',initialResult,enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function substract(){
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult -= parseInt(enteredNumber);
    createAndWriteRes('-',initialResult,enteredNumber);
    writeToLog('SUB', initialResult, enteredNumber, currentResult);
}

function multiply(){
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult *= parseInt(enteredNumber);
    createAndWriteRes('*',initialResult,enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}
function divide(){
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult /= parseInt(enteredNumber);
    createAndWriteRes('/',initialResult,enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
