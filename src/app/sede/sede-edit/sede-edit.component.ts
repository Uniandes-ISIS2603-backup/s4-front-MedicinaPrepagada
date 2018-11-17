import {Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

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
                private toastr: ToastrService,
                
        private router: Router,
        private route: ActivatedRoute) { }
                
           /**
    * The sede wich will be updated
    */
     sede: SedeDetail;
     
     /**
      * the id of the sede 
      */
     sede_id: number;



       /**
    * Retrieves the information of the sede which will be updated
    */
    getSede(): void {
        this.sedeService.getSedeDetail(this.sede_id).subscribe(sede => {           
            this.sede = sede;
        });
    }
      
    /**
    * Updates the information of the author
    */
    editSede(): void {
        this.sedeService.updateSede(this.sede)
            .subscribe(() => {
                this.router.navigate(['/sedes/' + this.sede.id]);
                this.toastr.success("La sede fue actualizada exitosamente", "Sede edition");
            });
    }

     /**
    * Cancela la edicion e informa al usuario
    */
    cancelEdition(): void {
        this.toastr.warning('La sede no fue editada', 'Sede edition');
        this.router.navigate(['/sedes/' + + this.sede.id]);    }
    
    
  ngOnInit() {
      this.sede_id = +this.route.snapshot.paramMap.get('id');
        this.getSede();
  }
  
  

}
