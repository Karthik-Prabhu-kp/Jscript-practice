var btnCheck = document.querySelector("#btn");
var userInput = document.querySelector("#input-text");
var divOutput = document.querySelector("#out")



function clickHandler(){
    divOutput.innerText = userInput.value
};

btnCheck.addEventListener('click' , clickHandler) 