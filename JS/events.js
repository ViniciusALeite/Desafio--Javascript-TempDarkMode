import {
    playButton,
    stopButton,
    moreButton,
    lessButton,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton,
    lightButton,
    darkButton
} from "./elements.js";
import { lessFiveMinutes, moreFiveMinutes, play, resetButtons } from "./controls.js";
import { forest, rain, cofeeShop, fireplace } from "./sounds.js";

playButton.addEventListener('click', play);

stopButton.addEventListener('click', resetButtons);

moreButton.addEventListener('click', moreFiveMinutes);

lessButton.addEventListener('click', lessFiveMinutes);

forestButton.addEventListener('click', forest);

rainButton.addEventListener('click', rain);

coffeeButton.addEventListener('click', cofeeShop);

fireplaceButton.addEventListener('click', fireplace);

lightButton.addEventListener('click', function(){     
    lightButton.classList.add('hide');
    darkButton.classList.remove('hide');
    $('body').css('background', '#000');
});

darkButton.addEventListener('click', function(){
    lightButton.classList.remove('hide');
    darkButton.classList.add('hide');
});

