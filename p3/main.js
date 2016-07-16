function telefonoConstructor (numero) {
	var telefono = numero;
	var marca = "";
	var color = "";
	var contador = 0;

	var aumentaCont = function (){
		contador +=1;
	};
}

var telefono = new telefonoConstructor(5548484848);

function llamar(numeoMarcar) {
	//
	var telefonoV2 = new telefonoConstructor(numeoMarcar);
	//telefonoV2.aumentaCont;
	console.log("CONTADOR DEL QUE SE CREO" + telefonoV2.contador);
	console.log("Contador de del otro numero" + telefono.contador);
}