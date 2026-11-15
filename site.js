(function(){
var q=document.getElementById("q"),cards=[].slice.call(document.querySelectorAll(".card")),chips=[].slice.call(document.querySelectorAll(".chip")),none=document.getElementById("none"),g="";
function run(){var t=(q.value||"").toLowerCase().trim().split(/\s+/).filter(Boolean),n=0;
cards.forEach(function(c){var ok=(!g||c.getAttribute("data-g")===g)&&t.every(function(w){return c.getAttribute("data-s").indexOf(w)>=0;});c.hidden=!ok;if(ok)n++;});
none.hidden=n>0;}
if(q){q.addEventListener("input",run);var m=location.search.match(/[?&]q=([^&]+)/);if(m){q.value=decodeURIComponent(m[1].replace(/\+/g," "));run();}}
chips.forEach(function(c){c.addEventListener("click",function(){g=c.getAttribute("data-g");chips.forEach(function(x){x.classList.toggle("on",x===c);});run();});});
})();
