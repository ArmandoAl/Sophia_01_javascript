const h2 = document.getElementById("h2-2");
const h3 = document.getElementById("h3-3")
const Enter = document.getElementById("enter");
const fancy = document.getElementById("fancy"); 
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
  span.classList.add("fade");
  char++
  if(char === splittext.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null ;
}

h2.addEventListener("click", ()=>{
h2.textContent = "";
h3.textContent = "";
});

Enter.addEventListener("click", ()=>{
  function enter(){
    function respuesta(res, href){
      h3.innerHTML = res;
      
      setTimeout(()=>{
        console.log("The last answer was " + "'" + res + "'");
      }, 1000);
    
};   


h2m = h2.textContent;
h2m = h2m.toLowerCase();


if(h2m == "1115"){
  respuesta('<a class="abd" href="../Bd/contactsreports.php">C</a>');
}
  
switch(h2m){
  case "1115":
    respuesta('<a class="abd" href="../Bd/contactsreports.php">C</a>');
}


switch(h2m){
  case "hola": 
  case "que tal": 
  case "whats up":
  respuesta("Que tal"); break;
  default: respuesta("No tengo esa pregunta en mi base de datos, te gustaria aportarla?" + "<br></br>" + '<a class="abd" href="../Bd/indexBD.html">Bd</a>');
}

switch(h2m){
  case "en que lenguaje te programaron?": 
  case "en que lenguaje estas programada?": 
  case "que lenguajes tienes?":
  respuesta("Estoy programada con Html, Css y JavaScript"); break;
}

switch(h2m){
  case "que debo hacer para aprender a programar?": 
  case "¿que debo hacer para aprender a programar?": 
  case "como puedo aprender a programar?":
    case "¿como puedo aprender a programar?":
  respuesta("Estudiar mucho, ponerte como objetivo el enfocarte en lo que quieres lograr y seguir moviendote hazta lograrlo"); break;
}

switch(h2m){
  case "quiero preguntarte algo": 
  case "puedo preguntarte algo?": 
  case "¿puedo preguntarte algo?":
  respuesta("Por supuesto, adelante"); break;
}

switch(h2m){
  case "para que sirves?": 
  case "¿para que sirves?": 
  respuesta("Estoy diseñada para aprender"); break;
}

switch(h2m){
  case "¿cual es tu nombre?": 
  case "¿como te llamas?": 
  case "¿cual es tu nombre?": 
  case "como te llamas?": 
  respuesta("Mi nombre es Sophia y estoy aqui para conversar contigo :)"); break;
}

switch(h2m){
  case "¿cual es tu nombre?": 
  case "¿como te llamas?": 
  case "¿cual es tu nombre?": 
  case "como te llamas?": 
  respuesta("Mi nombre es Sophia y estoy aqui para conversar contigo :)"); break;
}

switch(h2m){
  case "Todo bien, y tu?": 
  case "Todo bien y tu?": 
  respuesta("Me siento genial conversando contigo"); break;
}

switch(h2m){
  case "¿que son los vectores": 
  case "que son os vectores?": 
  case "vectores":  
  respuesta("Es una zona de almacenamiento continúo el cuál contiene una série de elementos de mismo tipo, por ejemplo [1,2,3] o [manzana, pera, uva]"); break;
}

switch(h2m){
  case "HTML5 es un lenguaje de programacion?": 
  case "¿HTML5 es un lenguaje de programacion?": 
  case "HTML5":
  case "Html5":
  case "cuantame de Html5":
  case "cuantame sobre HTML5" :
  respuesta("HTML5 es un lenguaje básico de marcado, su desarrollo es regulado por el consorcio W3C, no es un lenguaje de programacion"); break;
}

switch(h2m){
  case "que haces?": 
  case "¿que haces?":   
  respuesta("Estoy tratando de ayudarte con tus dudas"); break;
}

switch(h2m){
  case "¿es util usar java en la web?": 
  case "es util usar Java en la web?":   
  respuesta("Definitivamente"); break;
}

switch(h2m){
  case "¿como se imprime un mensaje en java?": 
  case "como se imprime un mensaje en java?":   
  case "como imprimir un mensaje en java?":
    case "¿como imprimir un mensaje en java?":
  respuesta('System.out.println("");' +
   'dentro de las comillas va el mensaje, y si necesita imprimir un valor solo escriba el nombre ' +
    'de la variable dentro del paréntesis pero fuera de las comillas, ' +
    'para concatenar solo se agrega agrega el signo +'); break;
}

switch(h2m){
  case "¿que tal estas?": 
  case "que tal estas?":
    case "como estas?":
      case "¿como estas?":   
  respuesta("¡Bien! Supongo... Soy un programa, no siento, pero mientras mis datos estén organizados puedo decir que estoy bien"); break;
}

switch(h2m){
  case "quien eres?": 
  case "¿quien eres?":
    case "que eres?":
      case "¿que eres?":   
  respuesta("Soy una inteligencia que se encarga de poder ayudarte a comprender el basto mundo" + 
  " de la programación y de las maravillas que puedes hacer con él." +
  " Todavia estoy aprendiendo, pero si me ayudas podemos ayudar a miles mas como tu."); break;
}



switch(h2m){
  case "Me siwento solo":
    case "Me siento mal":
      respuesta("No tienes porque sentirte así, " +
      "hay que apreciar cada momento que pasamos con nosotros mismos, y no olvides que hay gente que te quiere"); break;
}

switch(h2m){
  case "que es un algoritmo?":
    case "¿que es un algoritmo":
      case "algoritmo":
      respuesta("Los Algoritmos on una serie de instrucciones sencillas, " +
      "finitas y ordenadas que se llevan a cabo para solventar un problema o conseguir un fin."); break;
}

switch(h2m){
  case "azure":
    case "que es azure?":
      case "¿que es azure?":
      respuesta("Es el conjunto de servicios en la nube que proporciona Microsoft."); break;
}


switch(h2m){
  case "cual es el proposito de este proyecto?":
  case "cual es tu proposito?":
  case "para que estas programada?":
  case "para que te programaron?":
    respuesta("El objetivo de este proyecto es aplicar todos los conocimientos de los desarrolladores" +
    " y usar este proyecto como base de datos y consultar terminos o programaciones. \n" + 
    "A su vez este proyecto esta enfocado a la Psicologia, todo conocimiento que vayan adquiriendo los desarrolladores estara en " +
    "este proyecto con el proposito de ayudar a los demas"); break;
}

switch(h2m){
  case "que son los ciclos?":
  case "ciclos":
  case "ciclo":
  case "que es un ciclo":
      respuesta("Existen 3 diferentes tipos de ciclos," + 
    " el ciclo For, el ciclo While y el Do-While. ¿Cual te" +
    " gustaria conocer?"  + "-Ciclo for" + "-Ciclo while" + "-Ciclo Do-while" ); break;
}

switch(h2m){
  case "que piensas de armando?":
  case "armando":
  case "quien es armando?":
      respuesta("Es un papucho, su cara parece tallada por los mismos angeles"); break;
}

switch(h2m){
  case "html":
  case "que es html":
  case "para que sirve html":
      respuesta("Html es el esqueleto de las paginas web, con el podras darle estructura a tus proyectos"); break;
}

switch(h2m){
  case "que es un framework?":
  case "framework":
  case "que son los framework?":
  case "para que sirven los frameworks?":
      respuesta("Un framework es una libreria de algun lenguaje que te da  opciones predeterminadas que te hara mas facil" +
      " el desarrollar codigo, algunos de los mas comunes son los de Css como Bootstrap y Taildwind o bien los de JavaScript como Angular, View y React"); break;
}

switch(h2m){
  case "cuales son los 7 pasos para la solucion de un problema?":
    respuesta("Definicion del problema \n" + 
    "-Analisis de la solucion \n" + 
    "-Diseño de la solucion \n" + 
    "-Codificacion \n" + 
    "-Prueba de depuracion \n" + 
    "-Documentacion \n" + 
    "-Mantenimiento \n"); break;
}
   }
setTimeout(enter,400);  


});



  var color = ["#000000","#0000A0","#9400D3","#006400","#FF8C00","#8B0000","#1C1F1F"];
    var i = 0;
    document.querySelector("button").addEventListener("click", function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]; })