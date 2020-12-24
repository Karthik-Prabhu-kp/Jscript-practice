var btnCheck = document.querySelector("#btn1");
var divOutput = document.querySelector("#out1")

btnCheck.addEventListener('click' , primeCheckDob) ;

function primeCheckDob(date){
    
    var primenumber = parseInt(document.querySelector("#input1").value);

    var result = true;
    for (var i=2 ; i < date ; i ++){
      if ( date%i == 0){
        result= false;
        break;
    }}
    if (result == true){
        divOutput.innerText = primenumber + " is a prime number!!"
    }
    else{divOutput.innerText = primenumber + " is NOT a prime number.."}
}


