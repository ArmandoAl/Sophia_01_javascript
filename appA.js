window.addEventListener("load", ()=>{
    let time = gsap.timeline();

   time.to("#i5", {duration:2, opacity:1, display: "block"}, "+=0.15");
   time.to("#i6", {duration:3, opacity:1, display: "block"}, "+=0.1");
   time.to("#i5, #i6", {duration:3, opacity:0, display: "none"}, "+=0.1");
   time.to(".Button1 , #fancy , #h2 , #text , .Button2 , .Button3", {duration:2, opacity:1, display: "block"}, "+=0.15"); 
   time.to("#body", {duration:1, background:"black"},"+=0.1" );
   time.to("#particles-js", {duration:1, opacity:1}, "+=0.1");
});

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