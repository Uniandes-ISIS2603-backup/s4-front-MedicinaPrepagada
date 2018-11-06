/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class Factura 
{
    /**
     * Factura id
     */
    id:number;
    
    /**
     * id del cliente asociado a la factura
     */
    idCliente:number;
    
    /**
     * Fecha factura
     */
    fecha:string;
    
    /**
     * Factura valor
     */
    valor:number;
    
    /**
     * Factura concepto
     */
    concepto:string;
    
    /**
     * Factura pagada
     */
    pagada:boolean;
    
    
}
