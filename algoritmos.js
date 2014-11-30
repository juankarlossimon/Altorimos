var turno=1;


var pikachu={
	vida:100,
	ataque:55,
	win: function(){
		console.log('pikachu ha ganado')
	}

}

var diglipop={
	vida:100,
	ataque:45,
	win: function(){
		console.log('diglipop ha ganado')
	}

}
 while (pikachu.vida>0 && diglipop.vida>0)
 {
 	if(turno==1)
 	{
 		diglipop.vida=diglipop.vida-pikachu.ataque;
 		turno=2;
 		console.log('diglipop ahora tiene '+ diglipop.vida + 'puntos de vida');

 	}
 	else
 	{
 		pikachu.vida=pikachu.vida-diglipop.ataque;
 		turno=1;
 		console.log	('ahora pikachu tiene'+ pikachu.vida +'puntos de vida');
 	}


 }
 if(pikachu.vida>=0)
 {
 	pikachu.win();
 }else
 {
 	diglipop.win();
 }