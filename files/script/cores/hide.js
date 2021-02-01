var displaynone = function(){
wifiapp.style.display = "none";
locationapp.style.display = "none";
timeapp.style.display = "none";
systemapp.style.display= "none";
};

var displayall = function(){
wifiapp.style.display = "inline";
locationapp.style.display = "inline";
timeapp.style.display = "inline";
systemapp.style.display= "inline";
};

var unhide = function(){
face.style= "transition:all 0.5s;position:fixed;top:10%;left:40%;";

wifiapp.style.transition = "all 1s";
locationapp.style.transition = "all 1s";
timeapp.style.transition = "all 1s";
systemapp.style.transition = "all 1s";
healthapp.style.transition = "all 0.5s";
speakapp.style.transition = "all 0.5s";
projectsapp.style.transition = "all 0.5s";

wifiapp.style.top = "0%";
locationapp.style.top = "22.5%";
timeapp.style.top = "67.5%";
systemapp.style.top = "45%";

healthapp.style.left = "100%";
speakapp.style.left = "100%";
projectsapp.style.left = "100%";

wifiapp.style.left= "0%";
locationapp.style.left = "0%";
timeapp.style.left = "0%";
systemapp.style.left = "0%";
displayall();
};

window.onerror = function(){
document.getElementById("locationword4").style.display = "inline";
error_counter=error_counter+1;
};
var hide = function(){
face.style.transition = "all 1.5s";
face.style.transitionDelay = "0.5s";
face.style.left = "10%";


healthapp.style.transition = "all 1s";
speakapp.style.transition = "all 1s";
projectsapp.style.transition = "all 1s";

healthapp.style.transitionDelay= "1s";
speakapp.style.transitionDelay = "1s";
projectsapp.style.transitionDelay = "1s";

healthapp.style.left = "75%";
speakapp.style.left = "75%";
projectsapp.style.left = "75%";

wifiapp.style.transition = "all 1s";
locationapp.style.transition = "all 1s";
timeapp.style.transition = "all 1s";
systemapp.style.transition = "all 1s";

wifiapp.style.top = "150%";
locationapp.style.top = "180%";
timeapp.style.top = "210%";
systemapp.style.top = "240%";

wifiapp.style.left= "0%";
locationapp.style.left = "0%";
timeapp.style.left = "0%";
systemapp.style.left = "0%";

setTimeout(displaynone,500);
};