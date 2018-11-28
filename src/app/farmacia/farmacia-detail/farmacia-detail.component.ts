import {Component, OnInit, Input, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

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
        private route: ActivatedRoute,
        private router: Router,
        private toastrservice: ToastrService

    ) {//This is added so we can refresh the view when one of the sedes in
        //the "Other sedes" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        }); }

      /**
    * The farmacia
    */
    @Input() farmaciaDetail: FarmaciaDetail;



    /**
    * The farmacia's id retrieved from the address
    */
    farmacia_id: number;


/**
    * The suscription which helps to know when a new sede
    * needs to be loaded
    */
    navigationSubscription;
  
     lat:number;
     
     lng:number;
        
     
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
        this.lat = this.farmaciaDetail.latitud;
        this.lng = this.farmaciaDetail.longitud;
    }

}
