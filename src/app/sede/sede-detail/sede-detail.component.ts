import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


import {SedeService} from '../sede.service';


import {Sede} from '../sede';
import {SedeDetail} from '../sede-detail';
import {SedeConsultorioComponent} from '../sede-consultorio/sede-consultorio.component';


@Component({
  selector: 'app-sede-detail',
  templateUrl: './sede-detail.component.html',
  styleUrls: ['./sede-detail.component.css']
})
export class SedeDetailComponent implements OnInit {

    /**
    * The constructor of the component
    * @param sedeService The sede service which communicates with the API
    * @param route The route which helps to retrieves the id of the sede to be shown
    * @param toastrService The toastr to show messages to the user
    */
    
    constructor(private sedeService: SedeService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService) { }
        
        
        /**
    * The sede whose details are shown
    */
        sedeDetail: SedeDetail;
       /**
    * The sedes's id retrieved from the path
    */ 
        sede_id: number;
 /**
    * Shows or hides the consultorios
    */
    showConsultorios: boolean;
        /**
     * The child SedeConsultorioComponent
     */
    @ViewChild(SedeConsultorioComponent) consultorioListComponent: SedeConsultorioComponent;





        getSedeDetail(): void {
        this.sedeService.getSedeDetail(this.sede_id)
            .subscribe(sedeDetail => {
            this.sedeDetail = sedeDetail}, err => {
                this.toastrservice.error(err, "error");
                }          
             );
        }
        
        /**
     * The function called when a consultorio is posted, so that the child component can refresh the list
     */
    updateConsultorios(): void {
        this.getSedeDetail();
        this.consultorioListComponent.updateConsultorios(this.sedeDetail.consultorios);       
    }
    
     /**
    * Shows or hides the create component
    */
    showHideConsultorios(): void {
        
        this.showConsultorios = !this.showConsultorios;
    }
        
  ngOnInit() {
      this.sede_id = +this.route.snapshot.paramMap.get('id');
      this.sedeDetail = new SedeDetail();
      this.getSedeDetail();
  }

}
