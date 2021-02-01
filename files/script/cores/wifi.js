const perfData = window.performance.timing; 
const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
const connectTime = perfData.responseEnd - perfData.requestStart;
const renderTime = perfData.domComplete - perfData.domLoading;

if (connectTime>0&&connectTime<5){
document.getElementById("vis1").style.filter = "hue-rotate(310deg)";
} else if (connectTime>5&&connectTime<10) {
document.getElementById("vis1").style.filter = "hue-rotate(250deg)";
} else if (connectTime>15&&connectTime<25) {
document.getElementById("vis1").style.filter = "hue-rotate(190deg)";
} else if (connectTime>25) {
document.getElementById("vis1").style.filter = "hue-rotate(130deg)";
}else {

}

if (connectTime>0&&connectTime<5){
document.getElementById("timevis1").style.filter = "hue-rotate(310deg)";
} else if (connectTime>5&&connectTime<10) {
document.getElementById("timevis1").style.filter = "hue-rotate(250deg)";
} else if (connectTime>15&&connectTime<25) {
document.getElementById("timevis1").style.filter = "hue-rotate(190deg)";
} else if (connectTime>25) {
document.getElementById("timevis1").style.filter = "hue-rotate(130deg)";
}else {

}

var firstVar = (connectTime/1000);
if (firstVar<0){
document.getElementById("wifiword4").innerHTML = "0.000 s";
}else {
document.getElementById("wifiword4").innerHTML = parseFloat((firstVar).toFixed(3))+ " s";
}

if (navigator.onLine === false){
document.getElementById("wifiword3").style.transition = "all 1.5s";
document.getElementById("wifiword3").style.filter= "hue-rotate(190deg)";
} else {
document.getElementById("wifiword3").style.transition = "all 1.5s";
document.getElementById("wifiword3").style.filter= "hue-rotate(0deg)";
}


var wifi = function(){
if (wificlicked === true){
cpu.style.transition = "all 1.5s";
cpu2.style.transition = "all 1.5s";
cpu.style.transitionDelay = "1s";
cpu2.style.transitionDelay = "1s";
cpu.style.opacity = "100%";
cpu2.style.opacity = "100%";
ping.style.transition = "all 0.3s";
ping.style.top = "56%";
ping.style.opacity = "100%";
resource.style.transition = "all 0.3s";
resource.style.opacity = "100%";
rttframe.style.transition = "all 0.3s";
rttframe.style.opacity = "0%";
wifiapp.style.zIndex = 99999;
wifiapp.style.transition = "all 0.3s";
wifipic.style.transition = "opacity 0.15s";
wifiword.style.transition = "all 1.5s";
wifiword2.style.transition = "all 1.5s";
wifiword3.style.transition = "all 1.5s";
wifiword4.style.transition = "all 1.5s";
wifiword3.style.transition = "all 1.0s, top 0.0s";
wifiword5.style.transition = "all 1.0s, top 0.0s";
wifiword6.style.transition = "all 1.0s, top 0.0s";
wifiword7.style.transition = "all 1.0s, top 0.0s";
vis2.style.transition = "all 1.5s, left 0.1s";
vis3.style.transition = "all 1.5s, left 0.1s";
vis1.style.opacity = "100%";
vis2.style.opacity = "100%";
vis3.style.opacity = "100%";
vis2.style.left = "4%";
vis3.style.left = "4%";
wifiapp.style.backgroundColor = "#1a1a1a";
wifiapp.style.width = "100%";
wifiapp.style.height = "100%";
wifiapp.style.top = "0%";
wifiapp.style.opacity = "98%";
wifipic.style.opacity = "0%";
wifiword.style.opacity = "100%";
wifiword2.style.opacity = "100%";
wifiword4.style.opacity = "100%";
wifiword3.style.top = "5%";
wifiword3.style.opacity = "100%";

wifiword5.style.top = "86.5%";
wifiword5.style.opacity = "30%";

wifiword6.style.top = "5%";
wifiword6.style.opacity = "100%";

wifiword7.style.top = "5%";
wifiword7.style.opacity = "100%";

wifiword3.style.top = "5%";
wifiword3.style.opacity = "100%";
ipframe.style.transition = "opacity 0.3s";
ipframe.style.top = "-5.5%";
ipframe.style.opacity = "100%";
wificlicked = false;
} else {

wifiword5.style.top = "-100%";
wifiword5.style.opacity = "0%";

wifiword6.style.top = "-100%";
wifiword6.style.opacity = "0%";

wifiword7.style.top = "110%";
wifiword7.style.opacity = "0%";

resource.style.transition = "all 0.3s";
resource.style.opacity = "0%";
cpu.style.transition = "all 0.2s";
cpu2.style.transition = "all 0.2s";
cpu.style.opacity = "0%";
cpu2.style.opacity = "0%";
ping.style.transition = "opacity 0.3s, top 0.2s";
ping.style.top = "150%";
ping.style.opacity = "0%";
wifiword3.style.top = "100%";
wifiapp.style.zIndex = 2;
rttframe.style.transition = "all 0.3s";
rttframe.style.opacity = "0%";
wifipic.style.transition = "opacity 1.25s";
wifiapp.style.transition = "all 0.3s";
wifiword.style.transition = "all 0.2s";
wifiword2.style.transition = "all 0.2s";
wifiword4.style.transition = "all 0.2s";
wifiword3.style.transition = "all 0.2s, top 0.0s";
vis2.style.transition = "all 0.2s";
vis3.style.transition = "all 0.2s";
vis1.style.opacity = "0%";
vis2.style.opacity = "0%";
vis3.style.opacity = "0%"
vis2.style.left = "-100%";
vis3.style.left = "-100%";
wifiapp.style.backgroundColor = "Transparent";
wifiapp.style.width = "100px";
wifiapp.style.height = "100px";
wifipic.style.opacity = "100%";
wifiword2.style.opacity = "0%";
wifiword4.style.opacity = "0%";
wifiword3.style.opacity = "0%";
wifiword.style.opacity = "0%";
ipframe.style.transition = "opacity 0.3s";
ipframe.style.top = "-30%";
ipframe.style.opacity = "0%";

wificlicked = true;
}
};

window.onerror = function(){
document.getElementById("locationword4").style.display = "inline";
error_counter=error_counter+1;
};