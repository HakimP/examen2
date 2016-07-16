var numero = 6;
function agregarLi () {
	numero = numero + 1;
	$(".ulClass").append("<li>" + numero + "</li>");
}

function eliminarPrimer () {
	$("li:nth-child(1)").remove();
}