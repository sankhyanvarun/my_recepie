var randomNumber =(Math.floor(Math.random() * 100) + 1);
console.log(randomNumber);

function checkInput() {
    var userInput = document.getElementById('userInput').value
   
    if(userInput == randomNumber) {

        document.getElementById('s').innerHTML="sucess";
    }
    else{
       document.getElementById('s').innerHTML="TRY AGAIN";
       alert(randomNumber)

      
       
    }
}
function playSound() {
    if(userInput==1){
        alert("You pressed 1")
    }
    else{
        const audio = new Audio('key_press.mp3');
        audio.play();;
    }
   
}

