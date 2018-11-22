import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ExamenMedicoService} from '../examenmedico.service';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {Laboratorio} from '../../laboratorio/laboratorio';
import {ExamenMedico} from '../examenmedico';

@Component({
  selector: 'app-examenmedico-laboratorio-add',
  templateUrl: './examenmedico-laboratorio-add.component.html',
  styleUrls: ['./examenmedico-laboratorio-add.component.css']
})
export class ExamenMedicoLaboratorioAddComponent implements OnInit {

  /**
     * Consturcor del componente
     */
    constructor(private examenService: ExamenMedicoService,
        private toastr: ToastrService,
        private route: ActivatedRoute) { }
  
  /**
   * id del examen al que se le va a añadir el laboratorio
   */      
  idExamen: number;
  
  /**
   * id del laboratorio que se quiere agregar, debe existir
   */
  idLaboratorio: number;
  
  laboratorio: Laboratorio;
  
  /**
   * el output que le dice al componente que cancele la agregación
   */
  @Output() cancel = new EventEmitter();
    
  /**
   * el output que le dice al componente que el usuario creo el componente
   */
  @Output() create = new EventEmitter();
  
  
   /**
    * le agrega un laboratorio al examen médico
    */
    addLaboratorio():void{
      this.idExamen = +this.route.snapshot.paramMap.get('id');
      this.examenService.addLaboratorio(this.idExamen, this.laboratorio.id)
          .subscribe(() => {this.create.emit();
              this.create.emit();
              this.toastr.success("El laboratorio fue agregado", "Agregar laboratorio");
              }, err =>{
                  this.toastr.error("El laboratorio no fue agregado", "Agregar laboratorio");
              }
              );
  }
  
  /**
   * cancela la agregación del laboratorio
   */
  cancelAdd(): void{
      this.toastr.warning("El laboratorio no fue agregado", "Agregar laboratorio");
      this.cancel.emit();
  }

  /**
   * funcion que inicializa el componente
   */
  ngOnInit() {
      this.laboratorio = new Laboratorio;
      this.idExamen = +this.route.snapshot.paramMap.get('id');
      this.idLaboratorio = 0
  }


}
