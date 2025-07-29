if (condition) {
    
    
    document.addEventListener("keypress", function (event) {
        makeSound(event.key);
    });
    
    
    var currentAudio;
    for (var i = 0; i < document.querySelectorAll(".key").length; i++) {
        document.querySelectorAll(".key")[i].addEventListener("click", function () {
    
            var buttoninnerhtml = this.innerHTML;
            makeSound(buttoninnerhtml);
        });
    }
    
    
    
    function makeSound(keys) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    
        switch (keys) {
            case "q":
                currentAudio = new Audio("music/e6-82016.mp3");
                break;
    
            case "w":
                currentAudio = new Audio("music/c3-95007.mp3");
                break;
    
            case "e":
                currentAudio = new Audio("music/bongos-91170.mp3");
                break;
    
            case "r":
                currentAudio = new Audio("music/065391_drumrollwav-88344.mp3");
                break;
    
            case "t":
                currentAudio = new Audio("music/orch-006-cymbal-rollwav-14781.mp3");
                break;
    
            case "y":
                currentAudio = new Audio("music/piano-bell-sound-1-27144.mp3");
                break;
    
            case "u":
                currentAudio = new Audio("music/piano-crash-sound-37898.mp3");
                break;
    
            case "i":
                currentAudio = new Audio("music/piano-g-6200.mp3");
                break;
    
            case "o":
                currentAudio = new Audio("music/snare-roll-84943.mp3");
                break;
    
            case "p":
                currentAudio = new Audio("music/sting-rimshot-drum-roll-smooth-100369 (1).mp3");
                break;
    
            case "a":
                currentAudio = new Audio("music/e6-82016.mp3");
                break;
    
            case "s":
                currentAudio = new Audio("music/c3-95007.mp3");
                break;
    
            case "d":
                currentAudio = new Audio("music/bongos-91170.mp3");
                break;
    
            case "f":
                currentAudio = new Audio("music/065391_drumrollwav-88344.mp3");
                break;
    
            case "g":
                currentAudio = new Audio("music/orch-006-cymbal-rollwav-14781.mp3");
                break;
    
            case "h":
                currentAudio = new Audio("music/piano-bell-sound-1-27144.mp3");
                break;
    
            case "j":
                currentAudio = new Audio("music/piano-crash-sound-37898.mp3");
                 break;
    
            case "k":
                currentAudio = new Audio("music/piano-g-6200.mp3");
                break;
    
            case "l":
                currentAudio = new Audio("music/e6-82016.mp3");
                break;
    
            case "z":
                currentAudio = new Audio("music/c3-95007.mp3");
                break;
    
            case "x":
                currentAudio = new Audio("music/bongos-91170.mp3");
                break;
    
            case "c":
                currentAudio = new Audio("music/065391_drumrollwav-88344.mp3");
                break;
    
            case "v":
                currentAudio = new Audio("music/orch-006-cymbal-rollwav-14781.mp3");
                break;
    
            case "b":
                currentAudio = new Audio("music/piano-bell-sound-1-27144.mp3");
                break;
    
            case "n":
                currentAudio = new Audio("music/piano-crash-sound-37898.mp3");
                break;
    
            case "m":
                currentAudio = new Audio("music/piano-g-6200.mp3");
                break;
    
    
    
            default:
                break;
        }
    
        currentAudio.play();
    }
}