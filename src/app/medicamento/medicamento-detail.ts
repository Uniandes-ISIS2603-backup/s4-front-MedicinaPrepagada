import { Medicamento } from './medicamento';
import { Farmacia } from '../farmacia/farmacia';


/**
* This class represents a medicamento
* It contains all the information relevant to the medicamento
*/
export class MedicamentoDetail extends Medicamento {
   
    /**
    * The medicamento's descripcion
    */
    descripcion: string;
    
     /**
     * Las farmacias del medicamento
     */
    farmacias: Farmacia[];
        
    
}


