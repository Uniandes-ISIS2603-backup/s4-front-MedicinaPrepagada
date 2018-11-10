import {Component, OnInit, Output, EventEmitter } from '@angular/core';
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
                private toastr: ToastrService
    ) { }
    
    sede: Sede;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    createSede(): void{
        this.sedeService.createSede(this.sede)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("El sede fue creado", "Creacion Sede");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.sede = new Sede();
  }

}