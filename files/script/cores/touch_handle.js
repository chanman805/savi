

wifiapp.addEventListener('touchstart', handleWifiStart, false);        
wifiapp.addEventListener('touchmove', handleWifiMove, false);
locationapp.addEventListener('touchstart', handleLocationStart, false);        
locationapp.addEventListener('touchmove', handleLocationMove, false);
systemapp.addEventListener('touchstart', handleSystemStart, false);        
systemapp.addEventListener('touchmove', handleSystemMove, false);
timeapp.addEventListener('touchstart', handleTimeStart, false);        
timeapp.addEventListener('touchmove', handleTimeMove, false);
healthapp.addEventListener('touchstart', handleHealthStart, false);        
healthapp.addEventListener('touchmove', handleHealthMove, false);
speakapp.addEventListener('touchstart', handleSpeakStart, false);        
speakapp.addEventListener('touchmove', handleSpeakMove, false);
projectsapp.addEventListener('touchstart', handleProjectsStart, false);        
projectsapp.addEventListener('touchmove', handleProjectsMove, false);

hiden.addEventListener('touchstart', handleHIDEStart, false);       
hiden.addEventListener('touchmove', handleHIDEMove, false);

face.addEventListener('touchstart', handleFaceStart, false);       
face.addEventListener('touchmove', handleFaceMove, false);

var xDownWifi = null;                                                        
var yDownWifi = null;
var xDownLocation = null;                                                        
var yDownLocation = null;
var xDownSystem = null;                                                        
var yDownSystem = null;
var xDownTime = null;                                                        
var yDownTime = null;
var xDownHIDE = null;                                                        
var yDownHIDE = null;
var xDownFace = null; 
var yDownFace = null;
var xDownHealth = null; 
var yDownHealth = null;
var xDownSpeak = null; 
var yDownSpeak = null;
var xDownProjects = null; 
var yDownProjects = null;


function getTouchesProjects(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}           

function handleProjectsStart(evt) {
    const firstTouch = getTouchesProjects(evt)[0];                                      
    xDownProjects = firstTouch.clientX;                                      
    yDownProjects = firstTouch.clientY;                                      
};                                           
                                              

function handleProjectsMove(evt) {
    if ( ! xDownProjects || ! yDownProjects ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownProjects - xUp;
    var yDiff = yDownProjects - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
    
		chat();
        } else {

        }                       
    } else {
        if ( yDiff > 0 ) {
            
		
			
        } else { 
            
        }                                                                 
    }
    /* reset values */
    xDownProjects = null;
    yDownProjects = null;                                             
};




function getTouchesSpeak(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}           

function handleSpeakStart(evt) {
    const firstTouch = getTouchesSpeak(evt)[0];                                      
    xDownSpeak = firstTouch.clientX;                                      
    yDownSpeak = firstTouch.clientY;                                      
};                                           
                                              

function handleSpeakMove(evt) {
    if ( ! xDownSpeak || ! yDownSpeak ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownSpeak - xUp;
    var yDiff = yDownSpeak - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
    
		
        } else {

        }                       
    } else {
        if ( yDiff > 0 ) {
            
		
			
        } else { 
            
        }                                                                 
    }
    /* reset values */
    xDownSpeak = null;
    yDownSpeak = null;                                             
};




function getTouchesHealth(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}           

function handleHealthStart(evt) {
    const firstTouch = getTouchesHealth(evt)[0];                                      
    xDownHealth = firstTouch.clientX;                                      
    yDownHealth = firstTouch.clientY;                                      
};                                           
                                              

function handleHealthMove(evt) {
    if ( ! xDownHealth || ! yDownHealth ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownHealth - xUp;
    var yDiff = yDownHealth - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
    
		health();
        } else {
unhide();
        }                       
    } else {
        if ( yDiff > 0 ) {
            
		
			
        } else { 
          
        }                                                                 
    }
    /* reset values */
    xDownHealth = null;
    yDownHealth = null;                                             
};



function getTouchesHIDE(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}           

function handleHIDEStart(evt) {
    const firstTouch = getTouchesHIDE(evt)[0];                                      
    xDownHIDE = firstTouch.clientX;                                      
    yDownHIDE = firstTouch.clientY;                                      
};                                           
                                              

function handleHIDEMove(evt) {
    if ( ! xDownHIDE || ! yDownHIDE ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownHIDE - xUp;
    var yDiff = yDownHIDE - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
    
		
        } else {

        }                       
    } else {
        if ( yDiff > 0 ) {
            
		
			
        } else { 
            
        }                                                                 
    }
    /* reset values */
    xDownHIDE = null;
    yDownHIDE = null;                                             
};




function getTouchesFace(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}           

function handleFaceStart(evt) {
    const firstTouch = getTouchesFace(evt)[0];                                      
    xDownFace = firstTouch.clientX;                                      
    yDownFace = firstTouch.clientY;                                      
};                                           


function handleFaceMove(evt) {
    if ( ! xDownFace || ! yDownFace ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownFace - xUp;
    var yDiff = yDownFace - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {

		hide();
        } else {

 unhide();
        }                       
    } else {
        if ( yDiff > 0 ) {
            
		hide();
			
        } else { 
            unhide();
        }                                                                 
    }
    /* reset values */
    xDownFace = null;
    yDownFace = null;                                             
};




function getTouchesTime(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}    

function handleTimeStart(evt) {
    const firstTouch = getTouchesTime(evt)[0];                                      
    xDownTime = firstTouch.clientX;                                      
    yDownTime = firstTouch.clientY;                                      
};                                                  
                                              

function handleTimeMove(evt) {
    if ( ! xDownTime || ! yDownTime ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownTime - xUp;
    var yDiff = yDownTime - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
    timeclicked = false;
		time();
        } else {
		
		timeclicked = true;
time();
        }                       
    } else {
        if ( yDiff > 0 ) {
            
        } else { 
            hide();
        }                                                                 
    }
    /* reset values */
    xDownTime = null;
    yDownTime = null;                                             
};



function getTouchesSystem(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleSystemStart(evt) {
    const firstTouch = getTouchesSystem(evt)[0];                                      
    xDownSystem = firstTouch.clientX;                                      
    yDownSystem = firstTouch.clientY;                                      
};          
		 

function handleSystemMove(evt) {
    if ( ! xDownSystem || ! yDownSystem ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownSystem - xUp;
    var yDiff = yDownSystem - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
    systemclicked = false;
		system();
        } else {
		systemclicked = true;
system();
        }                       
    } else {
        if ( yDiff > 0 ) {
            
        } else { 
            hide();
        }                                                                 
    }
    /* reset values */
    xDownSystem = null;
    yDownSystem = null;                                             
};



function getTouchesLocation(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                 
function handleLocationStart(evt) {
    const firstTouch = getTouchesLocation(evt)[0];                                      
    xDownLocation = firstTouch.clientX;                                      
    yDownLocation = firstTouch.clientY;                                      
}; 				 

function handleLocationMove(evt) {
    if ( ! xDownLocation || ! yDownLocation ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownLocation - xUp;
    var yDiff = yDownLocation - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
    locationclicked = false;
		locationX();
        } else {
		locationclicked = true;
locationX();
        }                       
    } else {
        if ( yDiff > 0 ) {
            
        } else { 
            hide();
        }                                                                 
    }
    /* reset values */
    xDownLocation = null;
    yDownLocation = null;                                             
};



function getTouchesWifi(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleWifiStart(evt) {
    const firstTouch = getTouchesWifi(evt)[0];                                      
    xDownWifi = firstTouch.clientX;                                      
    yDownWifi = firstTouch.clientY;                                      
};                                                

function handleWifiMove(evt) {
    if ( ! xDownWifi || ! yDownWifi ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDownWifi - xUp;
    var yDiff = yDownWifi - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            wificlicked = false;
			wifi();
        } else {
	wificlicked = true;
            wifi();
        }                       
    } else {
        if ( yDiff > 0 ) {
            
        } else { 
            hide();
        }                                                                 
    }
    /* reset values */
    xDownWifi = null;
    yDownWifi = null;                                             
};

window.onerror = function(){
document.getElementById("locationword4").style.display = "inline";
error_counter=error_counter+1;
};
