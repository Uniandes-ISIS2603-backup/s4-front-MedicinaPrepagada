/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {TarjetaCredito} from '../tarjeta-credito/tarjeta-credito';

export class Paciente{
    /**
     * id del paciente
     */
    id: number;
    
    /**
     * login del paciente
     */
    login: string;
    
    /**
     * contrasena del paciente
     */
    contrasena: string;
    
    /**
     * tipo de usuario del paciente
     */
    tipoUsuario: string;
    
    /**
     * documento de identida
     */
    documentoIdentidad: number;
    
    /**
     * nombre del paciente
     */
    nombre: string;
    
    /**
     * fecha de nacimiento del paciente
     */
    fechaNacimiento: string;
    
    /**
     * direccion del paciente
     */
    direccion: string;
    
    /**
     * numero telefonico del paciente
     */
    numeroContacto: string;
    
    /**
     * correo del paciente
     */
    mail: string;
    
    /**
     * eps del paciente
     */
    eps: string;
    
    /**
     * tarjetas de credito del paciente
     */
    tarjetasCredito: TarjetaCredito[];
}


