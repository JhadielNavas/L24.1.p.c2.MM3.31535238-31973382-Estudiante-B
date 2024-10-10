import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Becado extends Cl_Estudiante {
    constructor(nombre, acumNotas, cantidadMaterias, edad, deporte) {
        super(nombre, acumNotas, cantidadMaterias);
        this._edad = edad;
        this._deporte = deporte;
    }

    set edad (edad) {
        this._edad = edad;
    }

    get edad () {
        return this._edad;
    }

    set deporte (deporte) {
        this._deporte = deporte;
    }

    get deporte () {
        return this._deporte;
    }
    
    calcularAdmision(){
        if (this.promedio() > 14 && this.edad >= 21) 
            return "Beisbol"; 
        else 
        if (this.promedio() >= 12 && this.edad == 19) 
            return "Futbol";
        else 
            return "No admitido en Futbol";
    }

    Deporte(){
        switch(this._deporte){
            case 1:
                return "1";
                break;
            case 2:
                return "2";
                break;
            default:
                return "No se ha podido determinar";
    }
    }
 }
