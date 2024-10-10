import Cl_Deportista from "./Cl_Deportista.js";

export default class Cl_Principal{
    constructor(){

        const deportista1 = new Cl_Deportista("Juan", 132, 8, 21, 1);
        const deportista2 = new Cl_Deportista("Félix", 110, 10, 20, 2);

        let salida = document.getElementById("salida");

        salida.innerHTML = `Nombre del estudiante: ${deportista1.nombre} <br>
        Acumulado de notas: ${deportista1.acumNotas} <br>
        Cantidad de materias: ${deportista1.cantidadMaterias} <br>
        Deporte (1= beisbol, 2= futbol): ${deportista1.Deporte()} <br>
        Edad: ${deportista1.edad} <br>
        Nota Promedio: ${deportista1.promedio()} <br>
        ${deportista1.nombre}: es admitido en ${deportista1.calcularAdmision()}`;


    }

}