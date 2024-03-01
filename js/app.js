//3. IMPORTAR A LOS CODER

import { getCoders } from "../apiConnection/API.js";

/* funcion IIFE SE AUTO EJECUTA SIN INVOCARSER, SOLO CON LA DECLARACION*/
(function(){
    document.addEventListener('DOMContentLoaded', showCoders)
    async function  showCoders(){
        const coders = await getCoders();
        console.log(coders);
        const contenedor = document.querySelector('tbody');

        coders.forEach((coder)=>{
            const {id, nombre, imageUrl, promedio, especialidad , expertoTecnologia} = coder;
            const rows = document.createElement('tr');
            rows.innerHTML = `
            <th scope = "row"> ${id}</th>
            <td><img src="${imageUrl}" width ="150px" ></td>
            <td>${nombre}</td>
            <td>${promedio}</td>
            <td>${especialidad}</td>
            <td>${expertoTecnologia}</td>
            <td><button type="button" class="btn btn-warning">Detalles</button></td>
            `;

            contenedor.appendChild(rows);

        })

    }
})()