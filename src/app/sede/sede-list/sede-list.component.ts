import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {SedeService} from '../sede.service';
import {Sede} from '../sede';



@Component({
  selector: 'app-sede',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit 
{
    
    /**
    * The list of sedes to display
    */
    @Input() sedes: Sede[];
    

    constructor(private sedeService: SedeService, private route: ActivatedRoute) { }
    
        allsedes: string = 'no';

    
    getSedes(): void 
    {
        this.sedeService.getSedes().subscribe(sedes => {this.sedes = sedes});
    }

  ngOnInit() 
  {
      
      this.getSedes();
        }
      
  

}
