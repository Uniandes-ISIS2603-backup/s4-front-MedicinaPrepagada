import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExamenMedicoService } from '../examenmedico.service';
import { ExamenMedico } from '../examenmedico';
import { ExamenMedicoDetail } from '../examenmedico-detail';
@Component({
  selector: 'app-examenmedico-detail',
  templateUrl: './examenmedico-detail.component.html',
  styleUrls: ['./examenmedico-detail.component.css']
})
export class ExamenMedicoDetailComponent implements OnInit {

  /**
    * The component's constructor
    * @param examenService The examen's service
    * @param route The route element which helps to obtain the examen's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private examenService: ExamenMedicoService,
        private route: ActivatedRoute
    ) { }

    /**
    * The examen medico whose details we want to show
    */
    examenDetail: ExamenMedicoDetail;

    /**
    * The examen's id retrieved from the address
    */
    examen_id: number;

    /**
    * The method which retrieves the detail of an examen
    */
    getExamenMedicoDetail(): void {
        this.examenService.getExamenMedicoDetail(this.examen_id)
            .subscribe(examenDetail => {
                this.examenDetail = examenDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the examen so it is never considered as undefined
    */
    ngOnInit() {
        this.examen_id = +this.route.snapshot.paramMap.get('id');
        this.examenDetail = new ExamenMedicoDetail();
        this.getExamenMedicoDetail();
    }

}
