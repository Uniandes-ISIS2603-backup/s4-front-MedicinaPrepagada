import {Medico} from '../medico/medico';
import {Consultorio} from '../sede/consultorio';

export class HorarioAtencion
{
   /**
    * El id del Horario de Atencion
    */
    id: number;
    
    /**
    * Fecha de Inicio del horario de atencion
    */
    fechaInicio: string;
    
    /**
    * Fecha de Fin del horario de atencion
    */
    fechaFin: string;
    
    /**
     * Medico del horario de Atencion
     * 
     */
      
     medico: Medico;
    
     consultorio:Consultorio;
    
    
    
}

