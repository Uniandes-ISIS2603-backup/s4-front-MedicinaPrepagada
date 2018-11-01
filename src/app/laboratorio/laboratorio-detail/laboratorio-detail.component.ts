import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {LaboratorioService} from '../laboratorio.service';
import {Laboratorio} from '../laboratorio';
import {LaboratorioDetail} from '../laboratorio-detail';

@Component({
  selector: 'app-laboratorio-detail',
  templateUrl: './laboratorio-detail.component.html',
  styleUrls: ['./laboratorio-detail.component.css']
})
export class LaboratorioDetailComponent implements OnInit {

  constructor(
        private laboratorioService: LaboratorioService,
        private route: ActivatedRoute
    ) { }
    
    @Input () laboratorioDetail:LaboratorioDetail;
    
    /**
    * The lab's id
    */
    laboratorio_id: number;
    
   /**
    * The method which retrieves info of a lab
    */
    getLaboratorioDetail(): void {
        this.laboratorioService.getLaboratorioDetail(this.laboratorio_id)
            .subscribe(laboratorioDetail => {
                this.laboratorioDetail = laboratorioDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the lab so it is never considered as undefined
    */
    ngOnInit() {
        this.laboratorio_id = +this.route.snapshot.paramMap.get('id');
        this.laboratorioDetail = new LaboratorioDetail();
        this.getLaboratorioDetail();
    }

}
