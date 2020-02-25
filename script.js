// JavaScript Document
var usuario = "mario";
var contraseña = "abc123";
var contador = 3;
window.addEventListener('load', inicio, false);
function inicio() 
{
	document.getElementById("boton").addEventListener("click",cambio,false);
	document.getElementById("boton").addEventListener("click", correcto, false);
	
}
function correcto(evt)
{
	if (document.getElementById("password").value == contraseña && document.getElementById("user").value == usuario)
	{
		document.location.href="cambio.html";
	}
	else 
	{
		contador--;
		if (contador == 0)
		{
			document.getElementById("password").disabled = true;
			document.getElementById("correcto").innerHTML = "No te quedan intentos";
		}	
	}
}
function cambio(evt)
{
	document.getElementById("antigua").disabled = true;
}