var imageAutal = "java/e.jfif";
var imagemAnterior = "java/d.jfif";


function trocar()
{
document.getElementById("figura").src = imageAutal;
let aux = imageAutal;
imageAutal = imagemAnterior;
imagemAnterior = aux	
	
}
 document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-bar ul');

    menuButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });
