import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';


import {SedeService} from '../sede.service';
import {SedeDetail} from '../sede-detail';




@Component({
  selector: 'app-sede-edit',
  templateUrl: './sede-edit.component.html',
  styleUrls: ['./sede-edit.component.css']
})
export class SedeEditComponent implements OnInit {
    
    
    
    
    /**
    * Constructor for the component
    * @param sedeService The sedes' services provider
    * @param toastr The toastr to show messages to the user
    */
    
  constructor(private sedeService: SedeService,
                private toastr: ToastrService) { }
                
           /**
    * The sede id as received from the parent component
    */
    @Input() sede: SedeDetail;

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
    editAuthor(): void {
        this.sedeService.updateSede(this.sede)
            .subscribe(() => {
                this.toastr.success("The sede's information was updated", "Sede edition");
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
