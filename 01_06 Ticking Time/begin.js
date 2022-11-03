/*
  WRITE YOUR SOLUTION HERE
*/



function TickingClock() {
  const clockDiv = document.getElementById("clock");
  return setInterval(() => {
    let date = new Date()
    let tick = date.toLocaleTimeString();
    clockDiv.innerText = tick;
  
  }, 1000);
}


TickingClock()