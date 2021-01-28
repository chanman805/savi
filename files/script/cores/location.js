
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  document.getElementById("lat").innerHTML = parseFloat(`${crd.latitude}`).toFixed(4)+ ",";
 document.getElementById("long").innerHTML = parseFloat(`${crd.longitude}`).toFixed(4);
 document.getElementById("altitude").innerHTML = "alt: "+(`${crd.altitude}`);
 document.getElementById("accuracy").innerHTML = "acc: "+(`${crd.accuracy}`);
 document.getElementById("altaccuracy").innerHTML = "alt/acc: "+(`${crd.altitudeAccuracy}`);
 document.getElementById("heading").innerHTML ="head: "+ (`${crd.heading}`);
  document.getElementById("speed").innerHTML = "speed: "+(`${crd.speed}`);
  
 
  
  

}

function error(err) {
    document.getElementById("accuracy").innerHTML = (`ERROR(${err.code}): ${err.message}`);
document.getElementById("locationword").style.display = "none";
document.getElementById("locationword2").style.display = "none";

}

var locationX = function(){
if (locationclicked === true){
locationword2.style.transition = "all 0.2s";
locationword2.style.transitionDelay = "0.5s";
locationword2.style.opacity = "60%";
locationword.style.transition = "all 0.2s";
locationword.style.transitionDelay = "0.5s";
locationword.style.opacity = "100%";
locationword3.style.transition = "all 0.2s";
locationword3.style.transitionDelay = "0.5s";
locationword3.style.opacity = "100%";
locationword4.style.transition = "all 0.2s";
locationword4.style.transitionDelay = "0.5s";
locationword4.style.opacity = "100%";
latitude.style.transition = "all 0.75s, top 0.2s";
latitude.style.opacity = "100%";
latitude.style.top = "0%";
longitude.style.transition = "all 0.75s, top 0.2s";
longitude.style.opacity = "100%";
longitude.style.top = "12%";
alti.style.transition = "all 0.5s, top 0.2s";
alti.style.opacity = "100%";
alti.style.top = "30%";
altac.style.transition = "all 0.5s, top 0.2s";
altac.style.opacity = "100%";
altac.style.top = "35%";
speed.style.transition = "all 0.5s, top 0.2s";
speed.style.opacity = "100%";
speed.style.top = "40%";
heading.style.transition = "all 0.5s, top 0.2s";
heading.style.opacity = "100%";
heading.style.top = "45%";
accuracy.style.transition = "all 0.5s, top 0.2s";
accuracy.style.opacity = "100%";
accuracy.style.top = "50%";
map.style.transition = "all 0.2s, opacity 2s";
map.style.opacity = "100%";
map.style.left = "50%";
weather.style.transition = "all 0.3s";
weather.style.opacity = "100%";
weather.style.left = "-2.5%";
locationapp.style.zIndex = 99999;
locationpic.style.transition = "opacity 0.15s";
locationapp.style.transition = "all 0.3s";
locationapp.style.backgroundColor = "#1a1a1a";
locationapp.style.top = "0%";
locationpic.style.opacity = "0%";
locationpic.style.top = "0%";
locationapp.style.width = "100%";
locationapp.style.height = "100%";
locationclicked = true;
} else {
locationapp.style.zIndex = 2;
locationword2.style.transition = "all 0.2s";
locationword2.style.opacity = "0%";
locationword3.style.transition = "all 0.2s";
locationword3.style.opacity = "0%";
locationword4.style.transition = "all 0.2s";
locationword4.style.opacity = "0%";
locationword.style.transition = "all 0.2s";
locationword.style.opacity = "0%";
latitude.style.transition = "all 0.2s, top 0.2s";
latitude.style.opacity = "0%";
latitude.style.top = "-25%";
longitude.style.transition = "all 0.2s, top 0.2s";
longitude.style.opacity = "0%";
longitude.style.top = "-13%";
alti.style.transition = "all 0.75s, top 0.2s";
alti.style.opacity = "0%";
alti.style.top = "-50%";
altac.style.transition = "all 0.75s, top 0.2s";
altac.style.opacity = "0%";
altac.style.top = "-45%";
speed.style.transition = "all 0.75s, top 0.2s";
speed.style.opacity = "0%";
speed.style.top = "-40%";
heading.style.transition = "all 0.75s, top 0.2s";
heading.style.opacity = "0%";
heading.style.top = "-35%";
accuracy.style.transition = "all 0.75s, top 0.2s";
accuracy.style.opacity = "0%";
accuracy.style.top = "-30%";
map.style.transition = "all 0.2s";
map.style.opacity = "0%";
map.style.left = "-100%";
weather.style.transition = "all 0.3s";
weather.style.opacity = "0%";
weather.style.left = "-10%";
locationapp.style.zIndex = 2;
locationapp.style.transition = "all 0.3s";
locationapp.style.backgroundColor = "Transparent";
locationapp.style.top = "22.5%";
locationpic.style.transition = "opacity 1.5s";
locationpic.style.opacity = "60%";
locationpic.style.top = "0%";
locationapp.style.width = "100px";
locationapp.style.height = "100px";
locationclicked = false;
}
};
navigator.geolocation.getCurrentPosition(success, error, options);