 setInterval(setClock, 1000);

 const hourHand = document.querySelector('[data-hour-hand]');
 const minuteHand = document.querySelector('[data-minute-hand]');
 const secondHand = document.querySelector('[data-second-hand]');

 function setClock() {
     const currentDate = new Date()
     const secondRatio = currentDate.getSeconds() / 60 //Ratio = poměr
     const minuteRatio = (secondRatio + currentDate.getMinutes())/ 60 //Ratio = poměr
     const hourRatio = (minuteRatio + currentDate.getHours()) / 12 //Ratio = poměr
    setRotation(secondHand,secondRatio)
    setRotation(minuteHand,minuteRatio)
    setRotation(hourHand,hourRatio)

 }

 function setRotation(element, rotationRatio) {
     element.style.setProperty('--rotation', rotationRatio * 360)
 }

 setClock()