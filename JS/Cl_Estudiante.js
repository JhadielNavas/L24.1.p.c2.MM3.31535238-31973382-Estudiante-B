export default class Estudiante {
    constructor(nombre, acumNotas, cantidadMaterias) {
        this._nombre = nombre;
        this._acumNotas = acumNotas;
        this._cantidadMaterias = cantidadMaterias;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set acumNotas(acumNotas){
        this._acumNotas = acumNotas;
    }

    get acumNotas(){
        return this._acumNotas;
    }

    set cantidadMaterias(cantidadMaterias){
        this._cantidadMaterias = cantidadMaterias;
    }

    get cantidadMaterias(){
        return this._cantidadMaterias;
    }

    promedio(){
        return (this._acumNotas / this._cantidadMaterias);
    }
}