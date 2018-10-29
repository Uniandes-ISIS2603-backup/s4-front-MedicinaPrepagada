import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MedicamentoService } from '../medicamento.service';
import { Medicamento } from '../medicamento';
import { MedicamentoDetail } from '../medicamento-detail';
@Component({
  selector: 'app-medicamento-detail',
  templateUrl: './medicamento-detail.component.html',
  styleUrls: ['./medicamento-detail.component.css']
})
export class MedicamentoDetailComponent implements OnInit {
    
    /**
    * The medicamento
    */
    @Input() medicamentoDetail: MedicamentoDetail;

  /**
    * The component's constructor
    * @param medicamentoService The medicamento's service
    * @param route The route element which helps to obtain the medicamento's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private medicamentoService: MedicamentoService,
        private route: ActivatedRoute
    ) { }





    /**
    * The medicamento's id retrieved from the address
    */
    medicamento_id: number;

    /**
    * The method which retrieves the books of an medicamento
    */
    getMedicamentoDetail(): void {
        this.medicamentoService.getMedicamentoDetail(this.medicamento_id)
            .subscribe(medicamentoDetail => {
                this.medicamentoDetail = medicamentoDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the medicamento so it is never considered as undefined
    */
    ngOnInit() {
        this.medicamento_id = +this.route.snapshot.paramMap.get('id');
       if (this.medicamento_id){
        this.medicamentoDetail = new MedicamentoDetail();
        this.getMedicamentoDetail();
        }
    }

}
