function agregarLi () {
	var ingreso = prompt("Agregar Elemento al final ", "");
	$(".ulClass").append("<li>" + ingreso + "</li>");
}