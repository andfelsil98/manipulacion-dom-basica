//la forma profesional de trabajar es poner en variables los selectores a utilizar como se muestra a continuacion
// el uso de query selector me permite trabajar similar a css seleccionando que etiquetas, clases, IDs vamos a usar 
const h1 = document.querySelector("h1"); //seleccionando por etiqueta
const p = document.querySelector("p"); //me selecciona la primera etiqueta p 
const pall = document.querySelectorAll("p"); //me selecciona todas las etiquetas p 
const parrafito = document.querySelector(".parrafito");//seleccionando por clase con el punto igual que en css
const pid = document.querySelector("#pid"); //seleccionando por clase con el hashtag igual que en css
const input = document.querySelector("input");

console.log(input.value);

// para imprimir varios elementos al tiempo lo hago de la siguiente forma por tanto toma todo como un objeto y lo imprime:
console.log({
    h1,
    p,
    pall,
    parrafito,
    pid,
    input
})

h1.innerHTML = "Modificado desde js <h5>etiqueta introducida<h5>" //(convierte todo a codigo HTML) por medio de esta instruccion se puede modificar los elementos de HTML desde js y no solo los textos sino adicionalmente se pueden incluir etiquetas de HTML como en este caso por ejemplo un h5

h1.innerText = "Modificado desde js <h5>etiqueta introducida<h5>" //(convierte todo a TEXTO) cuando en vez de poner innerHTML se pone inner text lo que se consigue es que me modifique el html pero todo lo interprete como texto no como etiquetas de HTML

console.log(h1.getAttribute("pantalla")); // de esta forma puedo extraer el valor de mi atributo inventado llamado pantalla 
console.log(h1.getAttribute("class")); //con este comando puedo acceder a los valores de cualquiera de los atributos de mis etiquetas en este caso por ejemplo el valor de class

// si quiero modificar los atributos se hace de la siguiente forma:

    //h1.setAttribute("class","rojo");

// si en vez de modificar una clase existente quiero agregar un clase se hace de la siguiente forma:"

    h1.classList.add("rojo");

// si quiero eliminar alguna clase:
    h1.classList.remove("verde")

// para modificar un valor por defecto de un input:

    input.value = 1070926361;

// si quiero crear elementos nuevos de HTML se usa lo siguiente:

    //console.log(document.createElement("img")); //de esta forma solo se puede ver que se creo el elemento desde la consola

// si quiero que el usuario pueda ver el elemento que se creo se hace de la siguiente forma:
//meto mi elemento creado en una variable
    const img = document.createElement("img");
//le agrego el atributo de source y busco una imagen para introducir
    img.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg");
    console.log(img);
// introdusco mi elemento creado dentro de un elemento ya existente en html en este caso mi elemento llamado pid y le mando como argumento mi elemento creado
    pid.innerHTML = "";
    pid.append(img);

    