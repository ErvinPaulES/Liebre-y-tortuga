import Animal from "./Animal.js";

class Tortuga extends Animal{
    constructor(numero, especie, nombre){
        super(numero, especie);
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    andar = (dado) =>{
        let avanzar = 1;

        if(dado>=1 && dado<=50){
            avanzar = 3
        }
        else if(dado>=51 && dado<=70){
            avanzar = -6;
        }
        return avanzar;
    }
}
export default Tortuga