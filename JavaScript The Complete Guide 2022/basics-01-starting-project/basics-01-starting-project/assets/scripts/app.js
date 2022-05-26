const defaultResult = 0;

let currentResult = defaultResult;

let logEntitties = [];

function getInputNumber(){
    return userInput.value;
}

function writeToLog(operators, preResult, operResult, newResult){
    const logEntity = {
        operator : operators,
        prevResult : preResult,
        number : operResult,
        result : newResult
    };
    logEntitties.push(logEntity);
    console.log(logEntitties);
}

function createAndWriteRes(operator, prevNumber, enteredNumber){
    const calDiscription = `${prevNumber} ${operator} ${enteredNumber}`;

    outputResult(currentResult, calDiscription);
}

function add(){
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;

    currentResult += parseInt(enteredNumber);

    createAndWriteRes('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function sub(){
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;

    currentResult -= parseInt(enteredNumber);
    
    createAndWriteRes('-', initialResult, enteredNumber);
    writeToLog('SUB', initialResult, enteredNumber, currentResult);
}

function mul(){
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;

    currentResult *= parseInt(enteredNumber);
    
    createAndWriteRes('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide(){
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;

    currentResult /= parseInt(enteredNumber);
    
    createAndWriteRes('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.add('click', mul);
divideBtn.addEventListener('click', divide);