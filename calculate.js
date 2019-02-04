'use strict';

let count = 0;

let calcButton = document.getElementById('calculateButton');
let funcButton = document.getElementById('functionButton');

calcButton.addEventListener('click', calculateButton);
funcButton.addEventListener('click', functionButton);

function functionButton(){
  if(count == 0){
    funcButton.value = 'Subtraction'
    count++;
  } else if(count == 1){
    funcButton.value = 'Multiplication'
    count++;
  }
  else if(count == 2){
    funcButton.value = 'Division'
    count++;
  } else {
      funcButton.value = 'Addition'
      count = 0;
    }
};

function calculateButton(){
  let first = document.getElementById('numberOne').value;
  let second = document.getElementById('numberTwo').value;
  let result = document.getElementById('result');

  if(funcButton.value == 'Addition'){
    result.textContent = 'Result: ' + (parseInt(first) + parseInt(second));

  } else if(funcButton.value == 'Subtraction'){
    result.textContent = 'Result: ' + (parseInt(first) - parseInt(second));

  } else if(funcButton.value == 'Multiplication'){
    result.textContent = 'Result: ' + (parseInt(first) * parseInt(second));

  } else {
    result.textContent = 'Result: ' + (parseInt(first) / parseInt(second));

  }
};
