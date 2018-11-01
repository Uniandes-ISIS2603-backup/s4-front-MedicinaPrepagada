import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Sede} from '../sede';
import {ToastrService} from 'ngx-toastr';
import {SedeService} from '../sede.service';


@Component({
  selector: 'app-sede-detail',
  templateUrl: './sede-detail.component.html',
  styleUrls: ['./sede-detail.component.css']
})
export class SedeDetailComponent implements OnInit {

    constructor(private sedeService: SedeService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService) { }
        
        sede: Sede;
        
        sede_id: number;

        getSede(): void {
        this.sedeService.getSede(this.sede_id)
            .subscribe(sede => {
            this.sede = sede}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
  ngOnInit() {
      this.sede_id = +this.route.snapshot.paramMap.get('id');
      this.sede = new Sede;
      this.getSede();
  }

}
