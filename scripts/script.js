const longitud = document.getElementById("Longitud");
const ancho = document.getElementById("Ancho");

const area = () => {
    //tienen que ser locales porque js solo reconoce el contenido que tienen los botones al apretar el boton.
    /*Aqui abajo tengo otro ejemplo si no las quiero poner globales
    lo que nos importa es que recoger el valor, DENTRO de la funcion, 
    es decir si te fijas arriba no tengo puesto el .value pero en este ejemplo
    tengo el value ya metido en la constante.
    y mas abajo el que no esta comentado solo recogemos el valor.*/
    // const longitud = parseFloat(document.getElementById("Longitud").value);
    // const ancho = parseFloat(document.getElementById("Ancho").value);

    const resultado = parseFloat(longitud.value) * parseFloat(ancho.value);
    console.log(resultado);
    //resultado.innerText = `El area es: ${resultado.toFixed(2)}`
    document.getElementById("area").textContent =  `El area es: ${resultado}`;
};
const perimetro = () => {
    // const longitud = parseFloat(document.getElementById("Longitud").value);
    // const ancho = parseFloat(document.getElementById("Ancho").value);

    const resultado = 2 * (parseFloat(longitud.value) + parseFloat(ancho.value));
    document.getElementById("perimetro").textContent = `El perimetro es: ${resultado}`;


};
document.getElementById("btn").addEventListener("click", () => area());
document.getElementById("btn").addEventListener("click", () => perimetro());