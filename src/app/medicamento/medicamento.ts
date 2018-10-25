/**
* This class represents an medicamento of the Medisistemas app. 
* It contains all the information relevant to the medicamento.
*/
export class Medicamento {
    /**
    * The medicamento's id
    */
    id: number;

    /**
    * The medicamento's name
    */
    nombre: string;

    
    /**
    * The medicamento's cantidad
    */
    cantidad: string;
    
    /**
    * Casa farmacéutica que elabora el medicamento
    */
    elaboradoPor: string;
    
    /**
    * The medicamento's cost
    */
    costo: number;

}

