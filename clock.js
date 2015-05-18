



var time = window.setInterval(function (){

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();


seconds = seconds <= 9 ? "0" + seconds : seconds;
minutes = minutes <= 9 ? "0" + minutes : minutes;
hours = hours <= 9 ? "0" + hours : hours;

document.querySelector(".clocksrule").innerHTML = hours + ":" + minutes + ":" + seconds;
// document.bgColor

});

