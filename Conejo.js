import Animal from "./Animal.js";

class Conejo extends Animal{
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
    saltar = (dado) =>{
        let avanzar = 1;

        if(dado>=1 && dado<=20){
            avanzar = 0;
        }
        else if(dado>=21 && dado<=40){
            avanzar = 9;
        }
        else if(dado>=41 && dado<=50){
            avanzar = -12;
        }
        else if(dado>=51 && dado<=65){
            avanzar = -2;
        }
        return avanzar;
    }
}
export default Conejo