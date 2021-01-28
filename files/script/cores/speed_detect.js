	
//JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
var imageAddr = "https://i.pinimg.com/564x/e2/0c/ce/e20ccebbf6562b93ff82ffc7d2c163f1.jpg"; 
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            console.log(msg);
        } else {
            for (var i = 0; i < msg.length; i++) {
                console.log(msg[i]);
            }
        }
    }
    
    var oProgress = document.getElementById("wifiword2");
    if (oProgress) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
        oProgress.innerHTML = actualHTML;
    }
}

function InitiateSpeedDetection() {
   
    window.setTimeout(MeasureConnectionSpeed, 1);
};    

if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
   
	var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
    
    function showResults() {
	document.getElementById("vis2").style.transition = "all 1.5s";
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
		if (speedMbps>0&&speedMbps<50){
		document.getElementById("vis3").style.filter = "hue-rotate(100deg)";

		} else if (speedMbps>50&&speedMbps<75){
		document.getElementById("vis3").style.transition = "all 1.5s";
		document.getElementById("vis3").style.filter = "hue-rotate(180deg)";
		} else if (speedMbps>75&&speedMbps<100){
		document.getElementById("vis3").style.transition = "all 1.5s";
		document.getElementById("vis3").style.filter = "hue-rotate(200deg)";
		} else if (speedMbps>100&&speedMbps<200){
		document.getElementById("vis3").style.transition = "all 1.5s";
		document.getElementById("vis3").style.filter = "hue-rotate(300deg)";
			} else if (speedMbps>200&&speedMbps<300){
			document.getElementById("vis3").style.transition = "all 1.5s";
			document.getElementById("vis3").style.filter = "hue-rotate(300deg)";
				} else if (speedMbps>300){
				document.getElementById("vis3").style.transition = "all 1.5s";
				} else {
				
				}
        ShowProgressMessage([
            speedMbps + " mb/s", 
            
        ]);
    }
}
