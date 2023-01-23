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
    darkButton, 
    forestVolume,
    rainVolume,
    coffeeVolume,
    fireVolume    
} from "./elements.js";
import { lessFiveMinutes, moreFiveMinutes, play, resetButtons } from "./controls.js";
import { forest, rain, cofeeShop, fireplace, buttonClick, forestAudio, rainAudio, coffeeShopAudio, fireplaceAudio } from "./sounds.js";

playButton.addEventListener('click', play);

stopButton.addEventListener('click', resetButtons);

moreButton.addEventListener('click', moreFiveMinutes);

lessButton.addEventListener('click', lessFiveMinutes);

forestButton.addEventListener('click', function() {
    forest()
    $('.switchColor').removeClass('switchColor');
    $('.forest').addClass('switchColor'); 
});

rainButton.addEventListener('click', function() {
    rain()
    $('.switchColor').removeClass('switchColor');
    $('.rain').addClass('switchColor');
});

coffeeButton.addEventListener('click', function() {
    cofeeShop()
    $('.switchColor').removeClass('switchColor');
    $('.coffeeShop').addClass('switchColor');
});

fireplaceButton.addEventListener('click', function() {
    fireplace()
    $('.switchColor').removeClass('switchColor');
    $('.fireplace').addClass('switchColor'); 
});

lightButton.addEventListener('click', function(){  
    buttonClick()   
    lightButton.classList.add('hide');
    darkButton.classList.remove('hide');
    $('body').removeClass('Light-Theme');
    $('body').addClass('Dark-Theme');  
});

darkButton.addEventListener('click', function(){
    buttonClick()
    lightButton.classList.remove('hide');
    darkButton.classList.add('hide');
    $('body').removeClass('Dark-Theme');
    $('body').addClass('Light-Theme');  
});

forestVolume.addEventListener('input', function() {
    forestAudio.volume = forestVolume.value
});

rainVolume.addEventListener('input', function() {
    rainAudio.volume = rainVolume.value
});

coffeeVolume.addEventListener('input', function() {
    coffeeShopAudio.volume = coffeeVolume.value
});

fireVolume.addEventListener('input', function() {
    fireplaceAudio.volume = fireVolume.value
});





