/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {TarjetaCredito} from '../tarjeta-credito/tarjeta-credito';
import {CitaMedica} from '../cita-medica/cita-medica';
import {CitaLaboratorio} from '../citalaboratorio/citalaboratorio';
import {Factura} from '../factura/factura';
import {HistoriaClinica} from '../historiaClinica/historiaClinica';

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
    
    /**
     * citas medicas del paciente
     */
    citasMedicas: CitaMedica[];
    
    /**
     * citas laboratoriio del paciente
     */
    citasLaboratorio: CitaLaboratorio[];
    
    /**
     * facturas del paciente
     */
    facturas: Factura[];
    
    /**
     * historias clinicas del paciente
     */
    historiasClinicas: HistoriaClinica[];
    
    
}


