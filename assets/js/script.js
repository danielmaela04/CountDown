var countDown = new Date("sept 10, 2022 00:00:00").getTime();

var count = setInterval(function() {
var novo = new Date().getTime();
var distancia = countDown - novo;
var day = Math.floor(distancia / (1000 * 60 * 60 * 24));
var hour = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minute = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
var second = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = day;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("seconds").innerHTML = second;

  if (distancia < 0) {
    clearInterval(count);
    document.getElementById("day, hours, minuts, seconds").innerHTML = "EXPIRED";
  }
}, 1000);