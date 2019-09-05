class Animal{
    constructor(numero, especie){
        this._numero = numero;
        this._especie = especie;
    }

    get numero(){
        return this._numero
    }
    set numero(numero){
        this._numero = numero;
    }
    get especie(){
        return this._especie
    }
    set especie(especie){
        this._especie = especie;
    }
}
export default Animal