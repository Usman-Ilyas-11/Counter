const increasebtn=document.getElementById("btni");
const dbtn=document.getElementById("btnd");
const rbtn=document.getElementById("btnr");
const clabel=document.getElementById("lab");
let count=0;
increasebtn.onclick=function(){
    count++;
    clabel.textContent=count;
}
dbtn.onclick=function(){
    count--;
    clabel.textContent=count;
}
rbtn.onclick=function(){
    count=0;
    clabel.textContent=count;
}
