var basla = document.getElementById("basla");
var zipla = document.getElementById("zipla");
var restat = document.getElementById("restat");
var saldir = document.getElementById("saldir");
var gizle = document.getElementById("gizle");
var atif = document.getElementById("atif");

var sonuc=document.getElementById("sonuc");

basla.onclick = function() {

const engel=document.querySelector("#engel");
const top=document.querySelector("#top");
const restat=document.querySelector("#restat");
const dog=document.querySelector("#dog");

document.getElementById('basla').style.visibility='hidden';
document.getElementById('atif').style.visibility='hidden';
document.getElementById('sonuc').style.visibility='visible';

var counter = 0;
    
//if (counter < 9999) {
  //  setInterval(function() {
    //    counter++;
      //  sonuc.value = counter;
    //}, 1000);
//}

engel.style.display="block";
engel.classList.add("engel-animate");

var carpismaKontrol = function() {
    var dogBottom =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("bottom"));

    var engelLeft =parseInt(window
            .getComputedStyle(engel)
            .getPropertyValue("left"));

    var ates =parseInt(window
    .getComputedStyle(top)
    .getPropertyValue("left"));

    //if (ates > engelLeft && 190<ates) {
      //  var tokenAtes="true";
       // engel.style.visibility="hidden";
        //top.style.display="none";
    //}

    //if(engelLeft<191) {
      //  engel.classList.remove("engel-animate");

        //if (engelLeft === 40) {
          //  engel.style.visibility="visible";
           // engel.classList.add("engel-animate");
       // }
    //}

if (ates > engelLeft && 190<ates) {
    top.classList.remove("top-animate");
    top.style.display="none";
        var sonuc=document.getElementById("sonuc");
        sonuc.value=Number(sonuc.value)+10;
}

if (engelLeft > globalThis.x && engelLeft < globalThis.y && dogBottom < 50) {
    var sonuc=document.getElementById("sonuc");
    sonuc.value=0;
} 

gizle.onclick=function() {
    //var attack = document.getElementById("attack"); 
    //attack.play(); 

    globalThis.x="";
    globalThis.y="";  

    top.style.display="block";
    if (status != "false") {
        top.classList.add("top-animate");
        top.style.display="block";

            if(top.classList!="top-animate")
          {
            top.classList.add("top-animate");
        }

        if(top.classList!="top-animate")
       {
            top.classList.add("top-animate");
            setTimeout(function(){
                top.classList.remove("top-animate");
            },1000);
        }
    }   
}

saldir.onclick=function() {

    //var y = document.getElementById("hidden"); 
    //y.play(); 

    globalThis.x="";
    globalThis.y="";     

    if(dog.classList!="fadeIn")
    {
        dog.classList.add("fadeIn");
        setTimeout(function(){
            dog.classList.remove("fadeIn");
        },1000);   
    }
}

if (dog.classList!="fadeIn") {
    globalThis.x="150";
    globalThis.y="190";  
}

if (engelLeft > globalThis.x && engelLeft < globalThis.y && dogBottom < 50) {
    //var crash = document.getElementById("crash"); 
    //crash.play(); 
    engel.style.display="none";
    document.getElementById('restat').style.visibility='visible';
    document.getElementById('zipla').style.visibility='hidden';
    document.getElementById('saldir').style.visibility='hidden';
    document.getElementById('gizle').style.visibility='hidden';
    var status = "false";

    if(restat.classList!="restat-animate")
    {
        restat.classList.add("restat-animate");
        setTimeout(function(){
            restat.classList.remove("restat-animate");
        },1000);
    }
}



} 

    var myVar = setInterval(carpismaKontrol,50);

    restat.onclick=function() {
        globalThis.x=150;
        globalThis.y=191;
        engel.classList.add("engel-animate");
        engel.style.display="block";
        document.getElementById('saldir').style.visibility='visible';
        document.getElementById('restat').style.visibility='hidden'; 
        document.getElementById('zipla').style.visibility='visible';
        document.getElementById('gizle').style.visibility='visible';
        counter = 0;
        var start = "true";        
    }

    zipla.onclick=function() {
        //var x = document.getElementById("myAudio"); 
        //x.play(); 


        if(engel.classList!="engel-animate")
        {
            engel.classList.add("engel-animate");
        }

        if(dog.classList!="dog-animate")
        {
            dog.classList.add("dog-animate");
            setTimeout(function(){
                dog.classList.remove("dog-animate");
            },500);
        } 
    }

}