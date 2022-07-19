const h1 = document.querySelector("h1"); //seleccionando por etiqueta
const input1 = document.querySelector("#calculo1"); //traigo de HTML toda la etiqueta con sus atributos
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#result");

function btnOnClick(){
    const suma = Number(input1.value)+ Number(input2.value);
    resultado.innerText = "Resultado: " + suma;//para que el usuario vea el resultado de la operacion usamos el innertext para ingresar un elemento al html que sea el resultad de dicha operacion
    
    //console.log(Number(input1.value)+ Number(input2.value)); // imprimir la etiqueta.atributo para que cuando existe el evento de oprimir el boton se ejecute la suma de los dos valores que hay en los input
}