var timer=60;
var score=0;
var hitrn = 0;

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getnewHit(){// j0 cheez function ke andr banai jati hai wo sirf fuction ke andr use hi sakri hai ;;
    hitrn=  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

 function makebubble(){var clutter = "";
for(var  i =1; i<=189   ; i ++){
    var rn = Math.floor(Math.random()*10  )
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML   = clutter;
 }


 function runtimer(){
    var timerint=setInterval(function () {
        if(timer>0){
            timer--;
        
      
        document.querySelector("#timerval").textContent = timer;}
        
            else{
                clearInterval(timerint);
                document.querySelector("#pbtm").innerHTML= `<h1> Game Over </h1>`//here we write   document.querySelector("#pbtm").innerHTML bcz jab timer 0 ho gya hai phir bhi game khel sakte hai to usko rokne ke liye hu buble hata denge   document.querySelector("#pbtm").innerHTML iski madad se (jab tal timer >0 hai if wali condition chalegi warma else wali chalegi aur bible gayab ho jayega jaise timer <0 hoga )  
            }
        
    },1000)
 }

document.querySelector("#pbtm").addEventListener("click",function (details) {
   var clickednum = Number(details.target.textContent);
   if(clickednum===hitrn){
    increasescore();
    makebubble();
    getnewHit();

   }

    
    //details.target.textContent ye abhi jo hai string hai isko number banae ke liye hun number(details.target.textContent) is tarah likhenge ;;;

});




 runtimer();    
 makebubble();
 getnewHit();


 