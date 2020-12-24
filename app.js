var btnCheck = document.querySelector("#btn1");
var divOutput = document.querySelector("#out1")

btnCheck.addEventListener('click' , primeCheckDob) ;

function primeCheckDob(){
    
    var primenumber = parseInt(document.querySelector("#input1").value);

    var result = true;
    for (var i=2 ; i < primenumber ; i ++){
      if ( primenumber % i == 0){
        result = false;}
        break;
    
      }
    if (result == true){
        divOutput.innerText = primenumber + " is a prime number!!"
    }
    else if (result == false){
        divOutput.innerText = primenumber + " is NOT a prime number.."
    }
}

var btnCheck = document.querySelector("#btn2");
var divOutput = document.querySelector("#out2")

btnCheck.addEventListener('click' , leapYearCheck) ;

function leapYearCheck(){

  var leapyear = parseInt(document.querySelector("#input2").value)

  if ( leapyear%4 == 0 && leapyear%100 != 0 ){
    divOutput.innerText = leapyear+ " you were born on a leap year !!"
  }
  else if ( leapyear%400 == 0 ){
    divOutput.innerText = leapyear+" You were born on a leap year.."
  }
  else { divOutput.innerText= leapyear+" you were NOT born on a leap year.."
  }
}


