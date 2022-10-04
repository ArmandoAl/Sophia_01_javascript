const audio = document.querySelector('audio');
const b1 = document.getElementById("button2");
const b2 = document.getElementById("button1");
const b3 = document.getElementById("fancy");
const b4 = document.getElementById("h2");
const b5 = document.getElementById("text");
const a = document.getElementById("a");
const au = document.getElementById("baudio");

window.addEventListener("load", ()=>{
  audio.src = "Finally Breathing.mp3";

  let time = gsap.timeline();

 time.to("#i5", {duration:2, opacity:1, display: "block"}, "+=0.10");
 time.to("#i6", {duration:2.5, opacity:1, display: "block"}, "+=0.1");
 time.to("#i5, #i6", {duration:2.5, opacity:0, display: "none"}, "+=5");
 time.to(".Button1 , #fancy , #h2 , #text , .Button2 , .Button3", {duration:1.5, opacity:1, display: "block"}, "+=0.15"); 
 time.to("#body", {duration:1, background:"black"},"+=0.1" );
 time.to("#particles-js", {duration:1, opacity:1}, "+=0.1");
});

/* setTimeout(()=>{
  audio.pause();
}, 20000);
 */

const fancy = document.getElementById("i5"); 
  const textfancy = fancy.textContent;
  const splittext = textfancy.split("");
  fancy.textContent= "";
  
  for (let i=0; i < splittext.length; i++ ){
    fancy.innerHTML += "<span>" + splittext[i] + "</span>";
  }
  
  let char = 0;
  let timer = setInterval(onTick,50);
  
  function onTick()
  { const span = fancy.querySelectorAll("span")[char];
    span.classList.add("color");
    char++
    if(char === splittext.length){
      complete();
      return;
    }
  }
  
   function complete(){
    clearInterval(timer);
    timer = null ;
  }; 
 
   b1.addEventListener("click", function(){
    const boton1 = document.createElement("button");
    boton1.innerHTML = "Si";
    document.body.appendChild(boton1);
    boton1.className = "botonsi";
    b1.style.display = "none";
    
    const boton2 = document.createElement("button");
    boton2.innerHTML = "No";
    document.body.appendChild(boton2);
    boton2.className = "botonno";

    boton1.addEventListener("click", ()=>{
    const si = document.createElement("h4");
    si.innerHTML = '<a href="indexS.html">Amonos</a>';
    document.body.appendChild(si);
    si.style.marginLeft = "auto";
    si.style.marginRight = "auto"

    boton1.style.display = "none";
    boton2.style.display = "none";
    });

    boton2.addEventListener("click", ()=>{
    /* console.log("Game");  */
    a.style.display = "none";
    b5.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "none";
    boton1.style.display = "none";
    boton2.style.display = "none";
    au.style.display = "none";
    music2.style.display = "none";
   }); 
  });

    b1.addEventListener("click",function(){
    document.querySelector("h3").innerText = "Hola, Soy Sophia \n" + "Estoy aqui para responder tus dudas. \n"  +
    "Quieres pasar al simulador de conversacion?";
    boton.style.display = "none";
    });
   

    var counter = 0;
    function intro(){
     if(counter == 0){
       counter = 1;
       audio.pause();
       music2.className = "music2";
     }else{
     counter = 0;
     audio.play();
     music2.className = "music";
     }};
     
    var count = 0;
    function music(){
   if(count == 0){
     count = 1;
     audio.src = "28 Days.mp3";
     music2.style.display = "none";
     audio.play();
   }else{
   count = 0;
   audio.pause();
   }};


  

    au.addEventListener("click",function(){
    document.querySelector("h3").innerHTML = "Oh, veo que te gusta la musica";})
 

    var color = ["#000000","#0000A0","#9400D3","#006400","#FF8C00","#8B0000","#1C1F1F"];
    var i = 0;
    document.querySelector("button").addEventListener("click", function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]; })