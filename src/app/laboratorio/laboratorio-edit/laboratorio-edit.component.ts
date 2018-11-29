import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {LaboratorioService} from '../laboratorio.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router/';
import { Laboratorio } from '../laboratorio';
@Component({
  selector: 'app-laboratorio-edit',
  templateUrl: './laboratorio-edit.component.html',
  styleUrls: ['./laboratorio-edit.component.css']
})
export class LaboratorioEditComponent implements OnInit, OnChanges{
 
 constructor(
       
        private laboratorioService: LaboratorioService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router:Router
    ) {}

    laboratorio: Laboratorio; 
    @Input() laboratorio_id:number;
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
     getLaboratorio():void{
      this.laboratorioService.getLaboratorio(this.laboratorio_id)
          .subscribe(lab => {this.laboratorio = lab;
          },
          err=>{
              this.toastrService.error(err, "Error");
          });
  }

    updateLaboratorio():void{
      var lab_edit={
          id: this.laboratorio.id,
          nombre: this.laboratorio.nombre,
          telefono: this.laboratorio.telefono,
          horarioAtencion: this.laboratorio.horarioAtencion,
          direccion: this.laboratorio.direccion,
          latitud: this.laboratorio.latitud,
          longitud: this.laboratorio.longitud
          
      }
      console.log(lab_edit);
      this.laboratorioService.updateLaboratorio(lab_edit)
          .subscribe(() => {
              this.toastrService.success("La informacion del laboratorio fue actualizada", "Editar Laboratorio");
      }, err =>{
          this.toastrService.error(err, "Error");
      });
  }

    cancelEdition(): void {
       this.toastrService.warning('El laboratorio no fue editado', 'Laboratorio edit');

        this.router.navigate(['/laboratorios/list']);
    }

    ngOnInit() {
        this.laboratorio_id = +this.route.snapshot.paramMap.get('id'); 
        this.laboratorio = new Laboratorio();
        this.getLaboratorio();  
    }

    ngOnChanges() {
        this.ngOnInit();
    }
}