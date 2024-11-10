
//Crear variable para almacenar url
const url = "https://api.nasa.gov/planetary/apod?api_key=etNcITy0zWb21RwphkCoxYtPkJafLiJaMeeBVsGf&count=45";

//Código usando async away

async function listaImagenes() {
    try {
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();

        const card = document.querySelector("[data-ul]");
        datosImagenes.forEach(elemento => {
            const contenido = `<li class="card"> 
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>`
            card.innerHTML = card.innerHTML + contenido
        })
    }
    catch(error) {
        console.log(error);
        
    }
}
listaImagenes();


/**
 * //Código usando then();
 * function listaImagenes(){
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes => {
        console.log(datosImagenes);

        const card = document.querySelector("[data-ul]");
        datosImagenes.forEach(elemento => {
            const contenido = `<li class="card"> 
               <img class="card__image" src="${elemento.url}" alt="imagen">
               <h3 class="card__title">${elemento.title}</h3>
             </li>`

             card.innerHTML = card.innerHTML + contenido
        })
    })
    .catch(error => console.log(error));
}
listaImagenes();
 */






//then() significa entonces, Aquí se procesan los datos si la promesa se cumple
//catch significa captura, Aquí se maneja el error si la promesa se rechaza

// function listaImagenes(){
    // fetch(url) //solicitud a la API usando la URL almacenada en la variable 'url'.
                  //La función 'fetch' devuelve una promesa, que representa el resultado de la solicitud.

    // .then(response => response.json()) //transformar respuesta json en objeto.Esta línea   maneja la respuesta de la API.
                                         //Si la solicitud fue exitosa, la respuesta se convierte a formato JSON usando 'response.json()'. El resultado de esta conversión es otro objeto de promesa.

    // .then(datosImagenes => {           //funcion para mostrar datos recibidos.
                                          //Esta línea maneja el resultado de la conversión a JSON.
                                          //El objeto 'datosImagenes' contiene los datos recibidos de la API.
                                          //Dentro de este 'then', se ejecutan las acciones para procesar los datos.

        // console.log(datosImagenes);    //Imprimir datos recibidos

        // const card = document.querySelector("[data-ul]"); 
                                         //Esta línea selecciona el elemento HTML con el atributo 'data-ul' usando 'document.querySelector'.
                                        //El elemento seleccionado se guarda en la variable 'card'.     

        // datosImagenes.forEach(elemento => {
                                        //Esta línea itera sobre cada elemento del array 'datosImagenes' usando 'forEach'.
                                        //Para cada elemento, se ejecuta el código dentro de la función de flecha.

            // const contenido = `<li class="card"> 
            //    <img class="card__image" src="${elemento.url}" alt="imagen">
            //    <h3 class="card__title">${elemento.title}</h3>
            //  </li>`

                                        //Esta línea crea una cadena de texto HTML que representa una tarjeta con una imagen y un título.
                                        //Se utiliza una plantilla de cadena (template string) para insertar la URL de la imagen y el título del elemento actual.

            //  card.innerHTML = card.innerHTML + contenido

                                        //Esta línea agrega el contenido HTML de la tarjeta al elemento 'card' usando 'innerHTML'.
                                        //Se utiliza '+=', que es una forma abreviada de 'card.innerHTML = card.innerHTML + contenido'.
        // })
    // })
    // .catch(error => console.log(error));

            //Esta línea maneja cualquier error que ocurra durante la solicitud o el procesamiento de los datos.
            //Si hay un error, se imprime en la consola usando 'console.log(error)'.
// }
// listaImagenes();

            //Esta línea llama a la función 'listaImagenes' para iniciar el proceso de obtención de datos de la API.