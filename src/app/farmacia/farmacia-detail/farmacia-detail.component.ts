import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FarmaciaService } from '../farmacia.service';
import { Farmacia } from '../farmacia';
import { FarmaciaDetail } from '../farmacia-detail';
@Component({
  selector: 'app-farmacia-detail',
  templateUrl: './farmacia-detail.component.html',
  styleUrls: ['./farmacia-detail.component.css']
})
export class FarmaciaDetailComponent implements OnInit {

  /**
    * The component's constructor
    * @param farmaciaService The farmacia's service
    * @param route The route element which helps to obtain the farmacia's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private farmaciaService: FarmaciaService,
        private route: ActivatedRoute
    ) { }

    /**
    * The farmacia whose details we want to show
    */
    farmaciaDetail: FarmaciaDetail;



    /**
    * The farmacia's id retrieved from the address
    */
    farmacia_id: number;

    /**
    * The method which retrieves the books of an farmacia
    */
    getFarmaciaDetail(): void {
        this.farmaciaService.getFarmaciaDetail(this.farmacia_id)
            .subscribe(farmaciaDetail => {
                this.farmaciaDetail = farmaciaDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the farmacia so it is never considered as undefined
    */
    ngOnInit() {
        this.farmacia_id = +this.route.snapshot.paramMap.get('id');
        this.farmaciaDetail = new FarmaciaDetail();
        this.getFarmaciaDetail();
    }

}
