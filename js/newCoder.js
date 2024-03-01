/*NEW CODER*/

/*11. IMPOTAR funcion para agregar nuevo coder (POST) */
import { newCoder } from "../apiConnection/API.js"
/* -------------------------------------------------- */



/*4. Selector de formulario */
const formulario = document.querySelector("#formulario")

/*5. listener del form */
formulario.addEventListener("submit", validacionCoder)

function validacionCoder(e){
    e.preventDefault()

    /*6. captura toedos los values que se encuentran en los inputs y selects del formulario */
    const nombre = document.querySelector("#nombre").value //.value para acceder a su valor ingresado
    const promedio = document.querySelector("#promedio").value
    const edad = document.querySelector("#edad").value
    const nivelIngles = document.querySelector("#nivelIngles").value
    const especialidad = document.querySelector("#especialidad").value
    const expertoTecnologia = document.querySelector("#expertoTecnologia").value


    /*7. Literal object Enhancement */
    const coder = {
        nombre: nombre,
        promedio: promedio,
        edad: edad,
        nivelIngles: nivelIngles,
        especialidad: especialidad,
        expertoTecnologia: expertoTecnologia
    }

    if (validate(coder)){
        alert("Todos los campos son obligatorios.")
        return; //el return vacio es para darle salida a la condicional
    }
    newCoder(coder) //funcion importada
}

function validate(objeto){
    return (!Object.values(objeto).every(element => element !== "")) //traer los elementos de coder diferentes a VACIO (true o false)
}