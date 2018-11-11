import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import {FarmaciaService} from '../farmacia.service';
import {Farmacia} from '../farmacia';
import {FarmaciaDetail} from '../farmacia-detail';


@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia-list.component.html',
  styleUrls: ['./farmacia-list.component.css']
})
export class FarmaciaListComponent implements OnInit {

    constructor(private farmaciaService: FarmaciaService) { }
   /**
    * The list of farmacias
    */
   @Input() farmacias: Farmacia[];

    /**
    * Shows or hides the farmacia-create-component
    */
    showCreate: boolean;
    
    /**
    * The id of the farmacia that the user wants to view
    */
    farmacia_id: number;
    
    /**
     * the farmacia that the user views.
     */
    selectedFarmacia : Farmacia;
   
    getFarmacias(): void {
        this.farmaciaService.getFarmacias()
            .subscribe(farmacias => this.farmacias = farmacias);
    }
    
    onSelected(farmacia_id: number):void {
        this.farmacia_id = farmacia_id;
        this.selectedFarmacia = new FarmaciaDetail();
        this.getFarmaciaDetail();     
    }
    
    getFarmaciaDetail(): void {
        this.farmaciaService.getFarmaciaDetail(this.farmacia_id)
            .subscribe(selectedFarmacia => {
                this.selectedFarmacia = selectedFarmacia
            });
     }

  ngOnInit() {
      this.getFarmacias();
  }
  
  /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedFarmacia) {
            this.selectedFarmacia = undefined;
            this.farmacia_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
}


