document.addEventListener('DOMContentLoaded', function() {
    // Calculator functionality
    const previousOperandElement = document.querySelector('.previous-operand');
    const currentOperandElement = document.querySelector('.current-operand');
    const numberButtons = document.querySelectorAll('.number-btn');
    const operationButtons = document.querySelectorAll('.operation-btn');
    const functionButtons = document.querySelectorAll('.function-btn');
    const scientificButtons = document.querySelectorAll('.scientific-btn');
    const equalsButton = document.querySelector('.equals-btn');
    const converterButton = document.querySelector('.converter-btn');
    const closeConverterButton = document.getElementById('closeConverter');
    const closeTipButton = document.getElementById('closeTip');
    const converterPanel = document.getElementById('converterPanel');
    const tipPanel = document.getElementById('tipPanel');
    
    let currentOperand = '0';
    let previousOperand = '';
    let operation = undefined;
    let resetScreen = false;

    // Update display
    function updateDisplay() {
        currentOperandElement.innerText = currentOperand;
        if (operation != null) {
            previousOperandElement.innerText = `${previousOperand} ${operation}`;
        } else {
            previousOperandElement.innerText = previousOperand;
        }
    }

    // Append number
    function appendNumber(number) {
        if (currentOperand === '0' || resetScreen) {
            currentOperand = number;
            resetScreen = false;
        } else {
            currentOperand += number;
        }
    }

    // Choose operation
    function chooseOperation(op) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    // Compute
    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
