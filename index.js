// let len = document.querySelectorAll(".drum").length;

// for (var i = 0; i < len; i++) {
//     let btn = document.querySelectorAll(".drum")[i];
    
//     btn.addEventListener("click", function () {
//         var buttonInnerHTML = this.innerHTML;
        

//         switch (buttonInnerHTML) {
//             case "w":
//                 var tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;

//             case "a":
//                 var tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;

//             case "s":
//                 var tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;

//             case "d":
//                 var tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;

//             case "j":
//                 var snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;

//             case "k":
//                 var crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;

//             case "l":
//                 var bass = new Audio("sounds/kick-bass.mp3");
//                 bass.play();
//                 break;

//             default:
//                 console.log("Unrecognized key:", buttonInnerHTML);
//         }
//     });
// }


const drumButtons = document.querySelectorAll(".drum");

// Click event for buttons
for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Keyboard event listener
document.addEventListener("keydown", function (event) {
    makeSound(event.key.toLowerCase()); // convert to lowercase to avoid mismatch
    buttonAnimation(event.key);
});

// Common function to play sound
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("Unbound key:", key);
    }
}

function buttonAnimation(currentKey){
   var activebutton =  document.querySelector("." + currentKey)
   activebutton.classList.add("pressed");
   setTimeout(() => {
    activebutton.classList.remove("pressed");
   }, 100);

}

