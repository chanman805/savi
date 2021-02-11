var replacewindow = function(){
window.location.replace('files/frame/chat.html')
};
var chat = function(){
chatbox.style.display = "inline";
chatbox.style.filter = "invert(0%);";
face.style.transition = "all 0.5s";
healthapp.style.transitionDelay = "0s";
speakapp.style.transitionDelay = "0s";
projectsapp.style.transitionDelay = "0s";
face.style.opacity = "0%";
healthapp.style.opacity = "0%";
speakapp.style.opacity = "0%";
projectsapp.style.left = "-20%";
setTimeout(replacewindow,1000);
chatclicked = true;
	};