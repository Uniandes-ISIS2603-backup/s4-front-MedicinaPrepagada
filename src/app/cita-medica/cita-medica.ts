/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Paciente} from '../paciente/paciente';
import {HorarioAtencion} from '../horario-atencion/horarioAtencion';

/**
* Esta clase representa una cita medica en mediSistemas. 
* Contiene toda la información relevante a una cita medica.
*/
export class CitaMedica{

  /**
   * Identificador de la cita medica
   */
  idCitaMedica: number;
  
  /**
   * Fecha de la cita medica
   */
  fecha: string;
  
  /**
   * Comentarios de la cita medica
   */
  comentarios: string;
  
  
  pacienteAAtender: Paciente;
  
  
  horarioAtencionAsignado: HorarioAtencion;
  
}  
