function cargarReloj(){
    // Haciendo uso del objeto Date() obtenemos la hora, minuto y segundo 
    var fechahora = new Date();
    var hora = fechahora.getHours(); 
    var minuto = fechahora.getMinutes(); 
    var segundo = fechahora.getSeconds(); 
 
    // Variable meridiano con el valor 'AM' 
    var meridiano = "am";
    
 
    // Si la hora es igual a 0, declaramos la hora con el valor 12 
    if(hora == 0){
 
        hora = 12;
        
    }
    
    // Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM' 
    if(hora > 12) {
 
        hora = hora - 12;
 
        // Variable meridiano con el valor 'PM' 
        meridiano = "pm";
 
    }
    
    // Formateamos los ceros '0' del reloj 
    hora = (hora < 10) ? + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;
    
    // Enviamos la hora a la vista HTML 
    var tiempo = hora + ":" + minuto + meridiano;    
    document.getElementById("relojnumerico").innerText = tiempo;
    document.getElementById("relojnumerico").textContent = tiempo;
 
    // Cargamos el reloj a los 500 milisegundos 
    setTimeout(cargarReloj, 500);
    
}
 
// Ejecutamos la función 'CargarReloj' 
cargarReloj();



/*==================animación=================*/

$(document).ready(function(){
  
  $(".text_hero  h1  span").lettering();
  
  
  let tl = gsap.timeline();
  
  tl.from(".text_hero  h1 span", {
    
    
    x:  -20,
    duration: 1,
    opacity: 1,
    opacity:0,
    stagger:.1
    
    
  })
  
  
  tl.from(".text_hero .parrafo", {
    
    
    y: 20,
    duration:1,
    opacity: 1,
    opacity:0,
    stagger:.1
    
    
  })
  
  
  
  
  
  
  
})

let mostrar = ()=>{
    var tl = anime.timeline({

     easing: 'easeInOutQuart'
      
      
    });
    tl 
   .add({
     targets: '.encabezado', 
     opacity: [0, 1], 
     translateY: [-100, 0],
     duration: 1000
     
   })
   
      .add({
     targets: '.reloj', 
     opacity: [0, 1], 
     translateX: [-100, 0],
     duration: 1500, 
     delay: anime.stagger(200, {start: 2000})
    
     
   }, "-=3000")
    
  } 
  
  mostrar();
  
  
  
  /*loader*/
  
  $(function(){
    
    $(window).on('load', function(){
      
      
    setTimeout(function(){
      
      $(".one").hide();
      
      
    },2800);
    
    setTimeout(function(){
      
      $(".two").show();
      
    },2800);
    
    
    
    
    
    
    
    
    
      
    });
  });