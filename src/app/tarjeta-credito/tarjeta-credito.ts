/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


export class TarjetaCredito{
    /**
     * numero de la tarjeta de credito
     */
    numero: number;
    
    /**
     * nombre en la tarjeta
     */
    nombreEnTarjeta: string;
    
    /**
     * codigo de seguridad en la tarjeta
     */
    codigoSeguridad: number;
    
    /**
     * fecha de expiracion de la tarjeta
     */
    fechaExpiracion: string;
    
    /**
     * franquicia de la tarjeta ej. Visa
     */
    franquicia: string;
}