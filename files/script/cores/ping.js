function ping(host, port, pong) {

  var started = new Date().getTime();

  var http = new XMLHttpRequest();

  http.open("GET", "https://" + host + ":" + port, /*async*/true);
  http.onreadystatechange = function() {
    if (http.readyState == 4) {
      var ended = new Date().getTime();

      var milliseconds = ended - started;
      if (pong != null) {
        pong(milliseconds);
      }
    }
  };
  try {
    http.send(null);
  } catch(exception) {
    // this is expected
  }
}
ping("8.8.8.8", "77", function(m){ 


document.getElementById("wifiword").innerHTML =m+" ms";

if (m>250){
document.getElementById("vis2").style.filter = "hue-rotate(100deg)";
} else if (m<250&&m>200){
	document.getElementById("vis2").style.transition = "all 1.5s";
		document.getElementById("vis2").style.filter = "hue-rotate(180deg)";
} else if (m<200&&m>150){

		document.getElementById("vis2").style.transition = "all 1.5s";
		document.getElementById("vis2").style.filter = "hue-rotate(200deg)";
} else if (m<150&&m>50){
	document.getElementById("vis2").style.transition = "all 1.5s";
		document.getElementById("vis2").style.filter = "hue-rotate(300deg)";
} else if (m<50){
document.getElementById("vis2").style.transition = "all 1.5s";
			document.getElementById("vis2").style.filter = "hue-rotate(300deg)";
}else {
	document.getElementById("vis2").style.filter = "hue-rotate(0deg)";
}

if (m>250){
document.getElementById("timevis2").style.filter = "hue-rotate(100deg)";
} else if (m<250&&m>200){
	document.getElementById("timevis2").style.transition = "all 1.5s";
		document.getElementById("timevis2").style.filter = "hue-rotate(180deg)";
} else if (m<200&&m>150){

		document.getElementById("timevis2").style.transition = "all 1.5s";
		document.getElementById("timevis2").style.filter = "hue-rotate(200deg)";
} else if (m<150&&m>50){
	document.getElementById("timevis2").style.transition = "all 1.5s";
		document.getElementById("timevis2").style.filter = "hue-rotate(300deg)";
} else if (m<50){
document.getElementById("timevis2").style.transition = "all 1.5s";
			document.getElementById("timevis2").style.filter = "hue-rotate(300deg)";
}else {
	document.getElementById("timevis2").style.filter = "hue-rotate(0deg)";
}

 })

window.onerror = function(){
document.getElementById("locationword4").style.display = "inline";
error_counter=error_counter+1;
};