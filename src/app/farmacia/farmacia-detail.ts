import { Farmacia } from './farmacia';

/**
* This class represents a farmacia
* It contains all the information relevant to the farmacia
*/
export class FarmaciaDetail extends Farmacia{
    
     /**                                                                             
    * The farmacia's longitud
    */
    longitud: number;
    
    /**                                                                             
    * The farmacia's latitud
    */
    latitud: number;
    
    /**                                                                             
    * The farmacia's correo
    */
    correo: string;
}


