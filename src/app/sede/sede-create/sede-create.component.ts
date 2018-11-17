import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import {SedeService} from '../sede.service';


import {Sede} from '../sede';


@Component({
  selector: 'app-sede-create',
  templateUrl: './sede-create.component.html',
  styleUrls: ['./sede-create.component.css']
})
export class SedeCreateComponent implements OnInit {

  constructor(private sedeService: SedeService,
                private toastr: ToastrService,
                private router: Router
    ) { }
    
    sede: Sede;
    
    
    
    createSede(): Sede{
        this.sedeService.createSede(this.sede)
            .subscribe(sede => {
                this.sede.id = sede.id;
                this.router.navigate(['/sedes/' + sede.id]);
                this.toastr.success("El sede fue creado", "Creacion Sede");      
        }, err =>{
            this.toastr.error(err, "No fue posible crear la sede");
        });
        return this.sede;
    }
    
        /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an sede
    */
    
    cancelCreation() : void{        
        this.toastr.warning('La sede no fue creada', 'Sede creation');

        this.router.navigate(['/sedes/list']);
    }

  ngOnInit() {
      this.sede = new Sede();
  }

}