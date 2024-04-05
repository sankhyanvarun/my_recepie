function playSound() {
    if(userInput==1){
        alert("You pressed 1")
    }
    else{
        const audio = new Audio('key_press.mp3');
        audio.play();;
    }
   
}


















// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log("DOM fully loaded and parsed");

//     // Listen for any key press
//     document.addEventListener('keydown', function() {
//         playSound();
//     });
// });

// function playSound() {
//     var sound = document.getElementById('audio');
//     sound.play();
// }
// var userInput = document.getElementById('userInput').value
// if(userInput=='1'){
//     alert("You pressed 1")
//     console.log("You pressed 1")
// }
// else{
//     playSound();
// }