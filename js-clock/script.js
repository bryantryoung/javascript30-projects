const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digital-clock')


function setDigitalClock() {
    const digTime = new Date();
    const seconds = digTime.getSeconds().toString(); 
    const mins = digTime.getMinutes().toString();
    const hour = digTime.getHours().toString();
    digitalClock.textContent = `${hour.padStart(2,'0')}:${mins.padStart(2,'0')}:${seconds.padStart(2,'0')}`
}

function setDate() {
    
    const time = new Date();
    const seconds = time.getSeconds(); 
    const mins = time.getMinutes();
    const hour = time.getHours();

    if (seconds === 0 ) {
        secondHand.style.transitionDuration = '0s';
        minsHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
       } else {
        secondHand.style.transitionDuration = '0.05s';
        minsHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
    }
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;
   
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

setInterval(setDate, 1000);
setInterval(setDigitalClock, 1000);
setDate();