const lightButton = document.querySelector('.lightness');
const darkButton = document.querySelector('.darkness');

const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const moreButton = document.querySelector('.more-minutes');
const lessButton = document.querySelector('.less-minutes');

const forestButton = document.querySelector('.forest');
const rainButton = document.querySelector('.rain');
const coffeeButton = document.querySelector('.coffeeShop');
const fireplaceButton = document.querySelector('.fireplace');

const forestVolume = document.querySelector('#forest-volume');
const rainVolume = document.querySelector('#rain-volume');
const coffeeVolume = document.querySelector('#coffeeShop-volume');
const fireVolume = document.querySelector('#fireplace-volume');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

export {
    playButton,
    stopButton,
    moreButton,
    lessButton,
    minutesDisplay,
    secondsDisplay,
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
};