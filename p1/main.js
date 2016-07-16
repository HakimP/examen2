var suma = 0;

function sumatoria() {
	$( ".resultado" ).html("");
  	do {
      	var ingreso = prompt("ingresa un número", "");
      	if(!isNaN(ingreso)) {
      		suma += parseInt(ingreso);
      		console.log(suma);
      		$( ".resultado" ).html("resultado: " + suma);
      	}
  	} while (ingreso != "fin");
  	console.log(suma);
  	$( ".resultado" ).html("resultado: " + suma);

}