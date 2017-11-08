//contador de caracteres que no entendí :( )

/*(function(){
  var msg = document.getElementsByClassName("msg")[0],
      charLeftLabel = "char-left",
      charLeft = document.getElementsByClassName(charLeftLabel)[0],
      maxChar = 140;
      maxCharWarn = 20;
  
      // mostrar los caracteres restantes al inicio
      charLeft.innerHTML = maxChar;

      // actualizar mientras se escribe
      msg.onkeydown = function(){
        setTimeout(function(){
          charLeft.innerHTML = maxChar - msg.value.length;

          // mostrar o no una clase de advertencia (.warning) basada en los caracteres que quedan
          var warnLabel = msg.value.length >= maxChar - maxCharWarn ? " warning" : "";
          charLeft.className = charLeftLabel + warnLabel;
        }, 1); 
      };
})();*/

//agrandador de textarea

var textarea = document.getElementById("textarea");
var limit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};

//cambiar de color el botoncito
var botoncito = document.getElementById('btn');
var textarea = document.getElementById("textarea");

textarea.addEventListener("focus", function(){
	if(textarea.length < 0 || textarea.length === 140){
		botoncito.setAttribute("disabled","disabled");
	}else{
		botoncito.removeAttribute("disabled");
	}
})

//agregar comentario

var botoncito = document.getElementById('btn');

botoncito.addEventListener('click', function(){
	var textarea = document.getElementById('textarea').value;
	// el value sirve para tomar el valor del id comment

	//limpiar el textarea
	document.getElementById('textarea').value='';

	//contenedor que esta en html
	var cont = document.getElementById('cont');

	// creamos el div que contiene cada comentario

	var newComments = document.createElement('div');

	//validar que el textarea tenga un mensaje

	if (textarea.length == 0 || textarea == null){
		alert('Deben ingresar un mensaje');
		botoncito.setAttribute("disabled","disabled");
		return false;
	}

		
	//nodos de texto del textarea ya creada

	var textNewComment = document.createTextNode(textarea);

	var contenedorElemento = document.createElement('p');

	contenedorElemento.appendChild(textNewComment);

	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);


/*validar que el mensaje tenga menos de 140 caracteres

	if (charLeftLabel.length === 141){
		alert("tu mensaje excede los 140 caractres");
		botoncito.setAttribute("disabled","disabled");
		return false;
	}*/
})

