import { Component, OnInit } from '@angular/core';
import {SedeService} from '../sede.service';

import {Sede} from '../sede';



@Component({
  selector: 'app-sede',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit 
{

    constructor(private sedeService: SedeService) { }
    
    
    sedes: Sede[];
    
    getSedes(): void 
    {
        this.sedeService.getSedes().subscribe(sedes => this.sedes = sedes);
    }

  ngOnInit() 
  {
      this.getSedes();
  }

}
