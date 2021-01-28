

wifiapp.addEventListener('touchstart', handleWifiStart, false);        
wifiapp.addEventListener('touchmove', handleWifiMove, false);
locationapp.addEventListener('touchstart', handleLocationStart, false);        
locationapp.addEventListener('touchmove', handleLocationMove, false);
systemapp.addEventListener('touchstart', handleSystemStart, false);        
systemapp.addEventListener('touchmove', handleSystemMove, false);
timeapp.addEventListener('touchstart', handleTimeStart, false);        
timeapp.addEventListener('touchmove', handleTimeMove, false);
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
            
			unhide();
			
        } else { 
            hide();
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
    
		
        } else {

        }                       
    } else {
        if ( yDiff > 0 ) {
            
			unFace();
			
        } else { 
            Face();
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

