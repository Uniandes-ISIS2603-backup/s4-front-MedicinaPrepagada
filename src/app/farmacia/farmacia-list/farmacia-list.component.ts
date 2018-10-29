import { Component, OnInit } from '@angular/core';
import {FarmaciaService} from '../farmacia.service';
import {Farmacia} from '../farmacia';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia-list.component.html',
  styleUrls: ['./farmacia-list.component.css']
})
export class FarmaciaListComponent implements OnInit {

    constructor(private farmaciaService: FarmaciaService) { }
    
    farmacias: Farmacia[];
    
    getFarmacias(): void {
        this.farmaciaService.getFarmacias()
            .subscribe(farmacias => this.farmacias = farmacias);
    }

  ngOnInit() {
      this.getFarmacias();
  }

}


