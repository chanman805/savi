var unhide = function(){

face.style= "transition:all 0.5s;position:fixed;top:10%;left:40%;";

vis4.style.transition = "all 2.5s";
vis4.style.left = "-200%";

wifiapp.style.transition = "all 1s";
locationapp.style.transition = "all 1s";
timeapp.style.transition = "all 1s";
systemapp.style.transition = "all 1s";

wifiapp.style.top = "0%";
locationapp.style.top = "22.5%";
timeapp.style.top = "67.5%";
systemapp.style.top = "45%";

};
var hide = function(){

face.style.transition = "all 1.5s";
face.style.transitionDelay = "0.5s";
face.style.left = "10%";

vis4.style.transition = "all 1.5s";
vis4.style.transitionDelay = "0.5s";
vis4.style.left = "-15%";

wifiapp.style.transition = "all 1s";
locationapp.style.transition = "all 1s";
timeapp.style.transition = "all 1s";
systemapp.style.transition = "all 1s";

wifiapp.style.top = "150%";
locationapp.style.top = "180%";
timeapp.style.top = "210%";
systemapp.style.top = "240%";

};