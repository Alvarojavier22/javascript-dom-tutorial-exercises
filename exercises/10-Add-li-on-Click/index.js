let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
let lista = document.querySelector("#myList")
let elemento= document.createElement("li")
elemento.innerHTML="Elemento " + (lista.children.length + 1)
lista.appendChild(elemento)
});
