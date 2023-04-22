let menuVisible = false;
// Funsión que oculta o muestra el menu
function mostrarOcultarMenu(){
  if (menuVisible){
    document.getElementById("nav").classList ="";
    menuVisible = false;
  }else{
    document.getElementById("nav").classList ="responsive";
    menuVisible = true;
  };
};

function seleccionar(){
  // Oculto el menu una vez que se selecciona una opción
  document.getElementById("nav").classList ="";
  menuVisible = false;
};

// Función que aplica las animaciones en las habilidades
function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("html");
    habilidades[2].classList.add("css");
    habilidades[3].classList.add("aws");
    habilidades[4].classList.add("bash");
    habilidades[5].classList.add("git");
    habilidades[6].classList.add("ubuntu");
    habilidades[7].classList.add("ingles");
  };
};
// Se detecta el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
  efectoHabilidades();
};
