var health = function(){
  alert(core_counter);
  alert(error_counter);
};

window.onerror = function(){
document.getElementById("locationword4").style.display = "inline";
error_counter=error_counter+1;
};