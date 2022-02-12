var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

let btnSubtrair = document.getElementById("subtrair");

btnSubtrair.addEventListener('click', function(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        document.getElementById('currentNumber').style.color = "red";
    }
});

/*function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 10){
        document.getElementById("adicionar").disabled = true;
        //alert("O limite máximo para incremento é 10!");
    }
}

