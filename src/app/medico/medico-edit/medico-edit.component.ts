import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { MedicoService } from '../medico.service';
import { Medico } from '../medico';


@Component({
  selector: 'app-medico-edit',
  templateUrl: './medico-edit.component.html',
  styleUrls: ['./medico-edit.component.css']
})
export class MedicoEditComponent implements OnInit {

  /**
    * Constructor for the component
    * @param sedeService The sedes' services provider
    * @param toastr The toastr to show messages to the user
    */
    
  constructor(private medicoService: MedicoService,
                private toastr: ToastrService) { }
                
           /**
    * The sede id as received from the parent component
    */
    @Input() medico: Medico;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an sede
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new sede
    */
    @Output() update = new EventEmitter();
         
    /**
    * Updates the information of the author
    */
    editMedico(): void {
        this.medicoService.updateMedico(this.medico)
            .subscribe(() => {
                this.toastr.success("The medico's information was updated", "Medico edition");
            });
        this.update.emit();
    }

     /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to update an sede
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    
  ngOnInit() {
  }
  
  /**
    * This function will be called when the user chooses another sede to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
