var chat = function(){
	if (chatclicked === false){
chatbox.style.display = "inline";
chatbox.style.filter = "invert(0%);";
face.style.zIndex = "-1";
healthapp.style.zIndex = "-1";
speakapp.style.zIndex = "-1";
projectsapp.style.left = "5%";
chatclicked = true;
	} else {
		chatbox.style.display = "none";
chatbox.style.filter = "invert(0%);";
face.style.zIndex = "100";
healthapp.style.zIndex = "1";
speakapp.style.zIndex = "1";
projectsapp.style.left = "77%";
chatclicked = false;
	}
}