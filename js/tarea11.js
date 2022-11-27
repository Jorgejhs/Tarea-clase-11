let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
case "lunes":
alert("Hoy es lunes, debes hacer 10 pasadas de 500m");
break;

case "martes":
alert("Hoy es martes, debes hacer 8km a ritmo medio");
break;

case "miércoles":
alert("Hoy es miércoles, debes hacer 15km en bicicleta");
break;

case "jueves":
alert("Hoy es jueves, debes hacer 10 pasadas de 500m, más 5 pasadas de 1km");
break;

case "viernes":
alert("Hoy es viernes, debes hacer 8km a ritmo medio");
break;

case "sábado":
alert("Hoy es sábado, debes hacer fondo de 15km");
break;

case "domingo":
alert("Hoy es domingo, día de descanso");
break;

default:
alert("Error: verifica el día de semana esté bien escrito.");
}



for(i=20;i<=70;i++){
    document.write("El número es: " + i + "<br>");    
    }



let repeticiones = parseInt(prompt("ingrese la cantidad de iteracciones"));
for (i=0; i < repeticiones; i++){
console.log("Hola mundo");
}  