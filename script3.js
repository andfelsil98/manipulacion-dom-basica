const h1 = document.querySelector("h1"); //seleccionando por etiqueta
const input1 = document.querySelector("#calculo1"); //traigo de HTML toda la etiqueta con sus atributos
const form = document.querySelector("#form");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#result");

//forma 1 de escuchar el evento sin que se me recargue la pagina

// form.addEventListener('submit',sumarInputValues); //para eliminar los eventos del html y ponerlos unicamente en js se usa la instruccion addeventlistener('nombre del evento', codigo js que quiero que se ejecute) las funciones no se deben poner los parentesis  

// function sumarInputValues(event){ // para cuando quiero hacer un submit de los imput agrego el parametro event por un lado por otro lado utilizo el metodo event.preventdefault para evitar que cuando le de al boton de submit se me recargue la pagina
//     // console.log({event});
//     event.preventDefault();
//     const suma = Number(input1.value)+ Number(input2.value);
//     resultado.innerText = "Resultado: " + suma;
// }


//forma 2 de escuchar el evento sin que se me recargue la pagina, este es cambiar el tipo del boton en HTML que por defecto es submit y ponerle tipo button de esa forma ya no se recarga la pagina

btn.addEventListener('click',btnOnClick()); 

function btnOnClick(){ 
    const suma = Number(input1.value)+ Number(input2.value);
    resultado.innerText = "Resultado: " + suma;
}