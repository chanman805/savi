var system = function(){
if (systemclicked === true){
systemapp.style.transition = "all 0.3s";
systemapp.style.backgroundColor = "#1a1a1a";
systemapp.style.width = "100%";
systemapp.style.height = "100%";
systemapp.style.zIndex = 99999;
systempic.style.transition = "opacity 0.15s";
systemapp.style.top = "0%";
systempic.style.opacity = "0%";
systempic.style.top = "0%";

systemcpu.style.opacity = "100%";
systemcpu.style.left = "65%";
systemcpu2.style.opacity = "100%";
systemcpu2.style.left = "73%";

systemvis1.style.opacity = "100%";
systemvis2.style.opacity = "0%";
systemvis3.style.opacity = "0%";
systemvis1.style.top = "14.5%";
systemvis2.style.top = "45%";
systemvis3.style.top = "60%";

systemword1.style.opacity = "100%";
systemword2.style.opacity = "100%";
systemword3.style.opacity = "100%";
systemword1.style.left = "0%";
systemword2.style.left = "4%";
systemword6.style.left = "4%";
systemword3.style.left = "22%";
systemword4.style.opacity = "100%";
systemword4.style.left = "4%";
systemword5.style.opacity = "100%";
systemword5.style.left = "75%";
icon.style.opacity = "100%";
icon.style.left = "30%";
systemword6.style.opacity = "100%"; 

systemclicked = false;

} else {

icon.style.opacity = "0%";
icon.style.left = "-100%";
systemword2.style.left = "-200%";
systemword4.style.opacity = "0%";
systemword4.style.left = "-100%";
systemword5.style.opacity = "0%";
systemword5.style.left = "-100%";
systemapp.style.transition = "all 0.3s";
systemapp.style.backgroundColor = "Transparent";
systemapp.style.width = "100px";
systemapp.style.height = "100px";
systemapp.style.zIndex = 2;
systempic.style.transition = "opacity 1s";
systemapp.style.top = "45%";
systempic.style.opacity = "60%";
systempic.style.top = "0%";

systemcpu.style.opacity = "0%";
systemcpu2.style.opacity = "0%";

systemcpu.style.left = "-100%";
systemcpu2.style.left = "-100%";

systemvis1.style.opacity = "0%";
systemvis2.style.opacity = "0%";
systemvis3.style.opacity = "0%";
systemvis1.style.top = "-100%";
systemvis2.style.top = "-100%";
systemvis3.style.top = "-100%";

systemword1.style.opacity = "0%";
systemword2.style.opacity = "0%";
systemword6.style.opacity = "0%"; 
systemword3.style.opacity = "0%";
systemword1.style.left = "-100%";
systemword2.style.left = "-500%";
systemword3.style.left = "-100%";

systemclicked = true;



}
};