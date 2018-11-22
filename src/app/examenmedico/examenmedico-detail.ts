import { ExamenMedico } from './examenmedico';
import { Laboratorio } from '../laboratorio/laboratorio';

/**
* This class represents a examen medico
* It contains all the information relevant to the examen medico
*/
export class ExamenMedicoDetail extends ExamenMedico{
    
    laboratorios: Laboratorio[];
}



