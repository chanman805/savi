var time = function(){
if (timeclicked === true){
timeapp.style.transition = "all 0.3s";
timeapp.style.backgroundColor = "#1a1a1a";
timeapp.style.width = "100%";
timeapp.style.height = "100%";
timeapp.style.zIndex = 99999;
timepic.style.transition = "opacity 0.15s";
timeapp.style.top = "0%";
timepic.style.opacity = "0%";
timepic.style.top = "0%";
clock.style.transition = "all 0.3s";
clock.style.opacity = "100%";
clock.style.left = "5%";
stock.style.transition = "all 0.3s";
stock.style.opacity = "100%";
stock.style.left = "2.5%";

timeword.style.transition = "all 0.3s";
timeword.style.top = "2.5%";
timeword.style.opacity = "100%";

timeword2.style.transition = "all 0.3s";
timeword2.style.top = "4.5%";
timeword2.style.opacity = "100%";

paris.style.transition = "all 0.3s";
paris.style.left = "72%";
paris.style.opacity = "100%";

rome.style.transition = "all 0.3s";
rome.style.left = "43%";
rome.style.opacity = "100%";

london.style.transition = "all 0.3s";
london.style.left = "57.5%";
london.style.opacity = "100%";

tokyo.style.transition = "all 0.3s";
tokyo.style.left = "86.5%";
tokyo.style.opacity = "100%";

timevis1.style.transition = "0.05s";
timevis1.style.left = "45%";
timevis1.style.opacity = "100%";

timevis2.style.transition = "0.05s";
timevis2.style.left = "45%";
timevis2.style.opacity = "100%";


timeclicked = false;

} else {

timeword2.style.transition = "all 0.3s";
timeword2.style.top = "-100%";
timeword2.style.opacity = "0%";

timeword.style.transition = "all 0.3s";
timeword.style.top = "-100%";
timeword.style.opacity = "0%";

timevis1.style.transition = "0.05s";
timevis1.style.left = "-100%";
timevis1.style.opacity = "0%";

timevis2.style.transition = "0.05s";
timevis2.style.left = "-100%";
timevis2.style.opacity = "0%";

paris.style.transition = "all 0.3s";
paris.style.left = "-100%";
paris.style.opacity = "0%";

rome.style.transition = "all 0.3s";
rome.style.left = "-100%";
rome.style.opacity = "0%";

london.style.transition = "all 0.3s";
london.style.left = "-100%";
london.style.opacity = "0%";

tokyo.style.transition = "all 0.3s";
tokyo.style.left = "-100%";
tokyo.style.opacity = "0%";

timeapp.style.transition = "all 0.3s";
timeapp.style.backgroundColor = "Transparent";
timeapp.style.width = "100px";
timeapp.style.height = "100px";
timeapp.style.zIndex = 2;
timepic.style.transition = "opacity 1s";
timeapp.style.top = "67.5%";
timepic.style.opacity = "60%";
timepic.style.top = "0%";
clock.style.transition = "all 0.3s";
clock.style.opacity = "0%";
clock.style.left = "-100%";

stock.style.transition = "all 0.3s";
stock.style.opacity = "0%";
stock.style.left = "-100%";

timeclicked = true;



}
};