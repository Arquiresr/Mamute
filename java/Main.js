var imageAutal = "java/e.jfif";
var imagemAnterior = "java/d.jfif";


function trocar()
{
document.getElementById("figura").src = imageAutal;
let aux = imageAutal;
imageAutal = imagemAnterior;
imagemAnterior = aux	
	
}