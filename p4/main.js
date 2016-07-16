function generar() {
	var ingreso = prompt("ingresa un número", "");
	if(!isNaN(ingreso)) {
		var altura;
		var ancho;
		var imprimir = "";
  		var total = parseInt(ingreso);
  		for(var i= total; i>0; i--) {
  			console.log(" ");
  			for(var j= 0; j<=total; j++) {
  				if(i == 1 || i == total){
  					imprimir += "*";
  				} else {
  					imprimir = "*";
  					for(var k= 0; k<=total; k++) {
  						imprimir += " ";
  					}
  					imprimir += "*";
  				}
  			}

  			if(i == 1 || i == total) {
  				imprimir = " " + imprimir;
  			}
  			console.log(imprimir);
  			imprimir = "";
  		}
  	}
}