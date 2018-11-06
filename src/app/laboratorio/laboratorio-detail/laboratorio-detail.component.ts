import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LaboratorioService} from '../laboratorio.service';
import {Laboratorio} from '../laboratorio';

@Component({
  selector: 'app-laboratorio-detail',
  templateUrl: './laboratorio-detail.component.html',
  styleUrls: ['./laboratorio-detail.component.css']
})
export class LaboratorioDetailComponent implements OnInit {

  constructor(
        private laboratorioService: LaboratorioService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
    ) { }
    
    
    /**
    * The lab's id
    */
    laboratorio_id: number;
    
    laboratorio: Laboratorio;
   /**
    * The method which retrieves info of a lab
    */
    getLaboratorio(): void 
        {
        this.laboratorioService.getLaboratorio(this.laboratorio_id)
            .subscribe(laboratorio => {
            this.laboratorio = laboratorio}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

    /**
    * The method which initializes the component
    * We need to initialize the lab so it is never considered as undefined
    */
    ngOnInit() {
        this.laboratorio_id = +this.route.snapshot.paramMap.get('id');
      this.laboratorio = new Laboratorio;
      this.getLaboratorio();
    }

}
