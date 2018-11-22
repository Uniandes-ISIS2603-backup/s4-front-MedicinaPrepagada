import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {SedeService} from '../sede.service';


import {Sede} from '../sede';
import {SedeDetail} from '../sede-detail';
import {SedeConsultorioComponent} from '../sede-consultorio/sede-consultorio.component';
import {SedeAddConsultorioComponent} from '../sede-add-consultorio/sede-add-consultorio.component';


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
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrservice: ToastrService) {
        
         //This is added so we can refresh the view when one of the sedes in
        //the "Other sedes" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        }); }
        
        
        /**
    * The sede whose details are shown
    */
        sedeDetail: SedeDetail;
       /**
    * The sedes's id retrieved from the path
    */ 
        sede_id: number;
        
      /**
    * The other sedes shown in the sidebar
    */
    other_sedes: Sede[];

    /**
    * The suscription which helps to know when a new sede
    * needs to be loaded
    */
    navigationSubscription;
  
     lat:number;
     
     lng:number;
        
        
 /**
    * Shows or hides the consultorios
    */
    showConsultorios: boolean;
        /**
     * The child SedeConsultorioComponent
     */
    @ViewChild(SedeConsultorioComponent) consultorioListComponent: SedeConsultorioComponent;

 /**
     * The child SedeAddConsultorioComponent
     */
    @ViewChild(SedeAddConsultorioComponent) consultorioAddComponent: SedeAddConsultorioComponent;





        getSedeDetail(): void {
        this.sedeService.getSedeDetail(this.sede_id)
            .subscribe(sedeDetail => {
            this.sedeDetail = sedeDetail,
                this.lat = sedeDetail.latitud,
                this.lng = sedeDetail.longitud}, err => {
                this.toastrservice.error(err, "error");
                }          
             );
        }
        
        /**
    * This method retrieves all the sedes in the Sedestore to show them in the list
    */
    getOtherSedes(): void {
        this.sedeService.getSedes()
            .subscribe(sedes => {
                this.other_sedes = sedes;
                this.other_sedes = this.other_sedes.filter(sede => sede.id !== this.sede_id);
            });
    }
    
    volver (): void {
        this.router.navigate(['sedes/list']);
    }
    
     /**
* This function deletes the sede from the app 
*/
    deleteSede(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar Sede',
            childComponent: SimpleModalComponent,
            data: {text: '¿Esta seguro de eliminar esta sede?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.sedeService.deleteSede(this.sede_id).subscribe(sede => {
                            this.toastrservice.success("La sede  ", "Sede Eliminada");
                            this.router.navigate(['sedes/list']);
                        }, err => {
                            this.toastrservice.error(err, "No fue posible eliminar la sede");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
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
     /**
    * The method which initilizes the component
    * We need to initialize the sede and 
    * they are never considered undefined
    */
        
  ngOnInit() {
      this.sede_id = +this.route.snapshot.paramMap.get('id');
      this.sedeDetail = new SedeDetail();
      this.getSedeDetail();
      this.getOtherSedes();
      console.log(this.lat)
  }
  
  /**
    * This method helps to refresh the view when we need to load another sede into it
    * when one of the other sedes in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
