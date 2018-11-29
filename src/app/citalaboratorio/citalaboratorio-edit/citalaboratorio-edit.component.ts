import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {CitaLaboratorioService} from '../citalaboratorio.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router/';
import { CitaLaboratorio } from '../citalaboratorio';
import {Laboratorio} from '../../laboratorio/laboratorio';
import {LaboratorioService} from '../../laboratorio/laboratorio.service';
@Component({
  selector: 'app-citalaboratorio-edit',
  templateUrl: './citalaboratorio-edit.component.html',
  styleUrls: ['./citalaboratorio-edit.component.css']
})
export class CitaLaboratorioEditComponent implements OnInit, OnChanges{
 
 constructor(
       
        private labService: LaboratorioService,
        private citaLaboratorioService: CitaLaboratorioService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    laboratorio:Laboratorio;
    laboratorios : Laboratorio[];
    citaLaboratorio: CitaLaboratorio; 
    atributoLab:Laboratorio;
    @Input() citaLaboratorio_id:number;
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
     getCitaLaboratorio():void{
      this.citaLaboratorioService.getCitaLaboratorio(this.citaLaboratorio_id)
          .subscribe(citalab => {this.citaLaboratorio = citalab;
          },
          err=>{
              this.toastrService.error(err, "Error");
          });
  }

/**
     * Obtiene los laboratorios para crear una cita
     */
    getLaboratorios(): void {
        this.labService.getLaboratorios()
            .subscribe(labs => {
                this.laboratorios = labs;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
    updateCitaLaboratorio():void{
        
        var listaLabs = this.laboratorios;
        
       for(let laboratorio of listaLabs){
                if(laboratorio.id = +(document.getElementById('citaLabLaboratorios') as HTMLInputElement).value)
                {
                    this.atributoLab
                }
            }
      var citalab_edit={
          id: this.citaLaboratorio.id,
          especialidad: this.citaLaboratorio.especialidad,
          fecha: this.citaLaboratorio.fecha,
          comentarios: this.citaLaboratorio.comentarios,
          recomedaciones: this.citaLaboratorio.recomendaciones,
          laboratorio: this.atributoLab
          
      }
      this.citaLaboratorioService.updateCitaLaboratorio(citalab_edit)
          .subscribe(() => {
              this.toastrService.success("La informacion de la cita laboratorio fue actualizada", "Editar CitaLaboratorio");
      }, err =>{
          this.toastrService.error(err, "Error");
      });
  }

    cancelEdition(): void {
       this.toastrService.warning('La cita no fue editada', 'CitaLab edit');

        this.router.navigate(['/citalaboratorio/list']);
    }

    ngOnInit() {
        this.citaLaboratorio_id = +this.route.snapshot.paramMap.get('id'); 
        this.citaLaboratorio = new CitaLaboratorio();
        this.getCitaLaboratorio();  
        this.laboratorios=[];
        this.getLaboratorios();
    }

    ngOnChanges() {
        this.ngOnInit();
    }
}