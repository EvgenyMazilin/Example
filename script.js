//поиск значений в полях input
let inputIn1 = document.querySelector('.input1');
let inputIn2 = document.querySelector('.input2');
let inputIn3 = document.querySelector('.input3');
let inputSumm = document.querySelector('.input4');

//кнопка
let clcikButton = document.querySelector('.button');

//при нажатии на кнпоку выводим значения
clcikButton.addEventListener('click', getClickButton);

function getClickButton() {
    let  input1 = parseInt(inputIn1.value);
    let  input2 = parseInt(inputIn2.value);
    let  input3 = parseInt(inputIn3.value);    
   
    let inputAll = summClickButton(input1, input2, input3);
    
    renderResults (inputAll);
  
}

function summClickButton (a, b, c) {
    return a + b + c
}

function renderResults (summIn) {
    document.querySelector('.input4').innerHTML = summIn;
}

function b(x, y, a) {
	arguments[2] = 10;
	alert(a);
}
b(1, 2, 3);






