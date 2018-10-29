import { Component, OnInit } from '@angular/core';
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
    
    farmacias: Farmacia[];
    farmacia_id: number;
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

}


