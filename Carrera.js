import Dado from "./Dado.js"
import Conejo from "./Conejo.js"
import Tortuga from "./Tortuga.js"

class Carrera{
    constructor(){
        this.cuadros = [];

    }
    iniciar = () =>{
        let dado = new Dado();
        let conejo = new Conejo(1, 'conejo', 'Bugsbunny');
        let tortuga = new Tortuga(2, 'tortuga', 'Luis');
        this.cuadros=[0,0];

        do{
            this.cuadros[0] += conejo.saltar(dado.Lanzar());
            this.cuadros[1] += tortuga.andar(dado.Lanzar());
            console.log(this.cuadros[0] + "  " + this.cuadros[1]);
            
            
        }while(this.cuadros[0]<100&&this.cuadros[1]<100)

        if(this.cuadros[1]>=100 && this.cuadros[0]>=100){
            console.log("Empate");
            
        }
        else if(this.cuadros[1]>=100){
            console.log("El " + tortuga.nombre+" la "+ tortuga.especie+  " Numero "+ tortuga.numero + " Gano");
            
        }
        else{
            console.log("El " + conejo.nombre+" el "+ conejo.especie +  " Numero "+ conejo.numero + " Gano");
        }

    }
}
export default Carrera