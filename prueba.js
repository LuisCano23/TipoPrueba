const prompt=require("prompt-sync")();

lluvia=[0.2,0,0.2,0,17,3.1,5,8,9,0.2,0.2,0,17,3.1,5,5,8,9,0.2,0.2,0,17,3.1,5,0.2,0,0.2,0,17,3.1];
suma=0
cont=0
mayor=-1
for(var i=0;i<30;i++){
    suma= suma+lluvia[i];
    promedio=(suma/lluvia.length);
    if (lluvia[i]>mayor){
        mayor=lluvia[i]
        dia= i+1
    }
}
for(var i=0;i<30;i++){
    if(lluvia[i]<promedio){
        cont=cont+1
    }
}
do{
    console.log("Bienvenido a los resultados del estudio de lluvias de sepiembre")
    opcion=parseInt(prompt("Que desea ver \n1)Promedio mensual de lluvia \n2)Dias con menos lluvia que el promedio \n3)Dia mas lluvioso del mes \n4)Salir\n"))
    switch(opcion){
        case 1:
            console.log("El promedio de la lluvia mensual de septiembre fue de: ", promedio);
            break
        case 2:
            console.log("La cantidad de dias con menos lluvia que el promedio fue de: ", cont);
            break
        case 3:
            console.log("El dia mas lluvioso del mes fue", mayor,"el dia", dia);
            break
        case 4:
            console.log("Gracias");
            break
    }
}while (opcion!=4)