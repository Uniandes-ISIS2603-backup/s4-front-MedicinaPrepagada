/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {TarjetaCredito} from '../tarjeta-credito/tarjeta-credito';

export class Paciente{
    id: number;

    login: string;
    
    contrasena: string;
    
    tipoUsuario: string;
    
    documentoIdentidad: number;
    
    nombre: string;
    
    fechaNacimiento: string;
    
    direccion: string;
    
    numeroContacto: string;
    
    mail: string;
    
    eps: string;
    
    tarjetasCredito: TarjetaCredito[];
}


