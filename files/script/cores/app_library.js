var alltheapps = function(){
	backbutton.style.transition = "all 0.5s";
	backbutton.style.display = "inline";
wifiapp.style.transition = "all 1s";
locationapp.style.transition = "all 1s";
timeapp.style.transition = "all 1s";
systemapp.style.transition = "all 1s";
weatherapp.style.transition = "all 1s";

wifiapp.style.top = "0%";
locationapp.style.top = "22.5%";
timeapp.style.top = "67.5%";
systemapp.style.top = "45%";
weatherapp.style.top = "0%";

wifiapp.style.left= "0%";
locationapp.style.left = "0%";
timeapp.style.left = "0%";
systemapp.style.left = "0%";
weatherapp.style.left = "20%";

face.style.transition = "all 1s";
face.style.top = "10%";
face.style.opacity = "0%";
weatherapp.style.opacity = "98%";
};
var normal = function(){
		backbutton.style.transition = "all 0.5s";
	backbutton.style.display = "none";
face.style.transition = "all 1s";
face.style.top = "10%";
face.style.opacity = "100%";
weatherapp.style.opacity = "0%";
};