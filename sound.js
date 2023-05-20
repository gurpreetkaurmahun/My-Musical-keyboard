

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});



for ( var i=0 ; i< document.querySelectorAll(".key").length ; i++){
    document.querySelectorAll(".key")[i].addEventListener("click",function(){
        
        var buttoninnerhtml=this.innerHTML;
        makeSound(buttoninnerhtml);
    });
}



function makeSound(keys){

    switch (keys) {
        case "q":
            var one= new Audio("music/e6-82016.mp3");
            one.play();
            break;

        case "w":
            var two= new Audio("music/c3-95007.mp3");
            two.play();
            break;

        case "e":
            var three= new Audio("music/bongos-91170.mp3");
            three.play();
            break;

        case "r":
            var four= new Audio("music/065391_drumrollwav-88344.mp3");
            four.play();
            break;

        case "t":
            var five= new Audio("music/orch-006-cymbal-rollwav-14781.mp3");
            five.play();
            break;

        case "y":
            var six= new Audio("music/piano-bell-sound-1-27144.mp3");
            six.play();
            break;

        case "u":
            var seven= new Audio("music/piano-crash-sound-37898.mp3");
            seven.play();
            break;

        case "i":
            var eight= new Audio("music/piano-g-6200.mp3");
            eight.play();
            break;

        case "o":
            var nine= new Audio("music/snare-roll-84943.mp3");
            nine.play();
            break;

        case "p":
            var ten= new Audio("music/sting-rimshot-drum-roll-smooth-100369 (1).mp3");
            ten.play();
            break;

        case "a":
            var one= new Audio("music/e6-82016.mp3");
            one.play();
            break;

        case "s":
            var two= new Audio("music/c3-95007.mp3");
            two.play();
            break;

        case "d":
            var three= new Audio("music/bongos-91170.mp3");
            three.play();
            break;

        case "f":
            var four= new Audio("music/065391_drumrollwav-88344.mp3");
            four.play();
            break;

        case "g":
            var five= new Audio("music/orch-006-cymbal-rollwav-14781.mp3");
            five.play();
            break;

        case "h":
            var six= new Audio("music/piano-bell-sound-1-27144.mp3");
            six.play();
            break;

        case "j":
            var seven= new Audio("music/piano-crash-sound-37898.mp3");
            seven.play();
            break;

        case "k":
            var eight= new Audio("music/piano-g-6200.mp3");
            eight.play();
            break;

        case "l":
            var one= new Audio("music/e6-82016.mp3");
            one.play();
            break;

        case "z":
            var two= new Audio("music/c3-95007.mp3");
            two.play();
            break;

        case "x":
            var three= new Audio("music/bongos-91170.mp3");
            three.play();
            break;

        case "c":
            var four= new Audio("music/065391_drumrollwav-88344.mp3");
            four.play();
            break;

        case "v":
            var five= new Audio("music/orch-006-cymbal-rollwav-14781.mp3");
            five.play();
            break;

        case "b":
            var six= new Audio("music/piano-bell-sound-1-27144.mp3");
            six.play();
            break;

        case "n":
            var seven= new Audio("music/piano-crash-sound-37898.mp3");
            seven.play();
            break;

        case "m":
            var eight= new Audio("music/piano-g-6200.mp3");
            eight.play();
            break;

        

        default:
            break;
    }

}