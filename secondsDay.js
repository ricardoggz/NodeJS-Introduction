/*1. Escribir un programa que calcule el número de segundos que existen en un día.

Para ello debemos multiplicar los segundos de un minuto, por los minutos de

una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.*/

function secondsDay(){
    let secondsDay= (60* 60) * 24;
    //seconds in a day
    console.log('seconds in a day: ' + secondsDay);
}

secondsDay();