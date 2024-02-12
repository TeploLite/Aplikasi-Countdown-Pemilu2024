var countDownDate = new Date("Feb 14, 2024 07:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var hari = Math.floor(distance / (1000 * 60 * 60 * 24));
  var jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var detik = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = hari;
  document.getElementById("jam").innerHTML = jam;
  document.getElementById("menit").innerHTML = menit;
  document.getElementById("detik").innerHTML = detik;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hari").innerHTML = "00";
    document.getElementById("jam").innerHTML = "00";
    document.getElementById("menit").innerHTML = "00";
    document.getElementById("detik").innerHTML = "00";
  }
}, 1000);

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

let sfx1 = document.getElementById("sfx1");
let sfx2 = document.getElementById("sfx2");
let sfx3 = document.getElementById("sfx3");

button1.addEventListener("click", function () {
  sfx1.play();
});
button2.addEventListener("click", function () {
  sfx2.play();
});
button3.addEventListener("click", function () {
  sfx3.play();
});
