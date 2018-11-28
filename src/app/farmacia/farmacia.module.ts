import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FarmaciaService} from './farmacia.service';
import { FarmaciaListComponent } from '../farmacia/farmacia-list/farmacia-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FarmaciaDetailComponent } from './farmacia-detail/farmacia-detail.component';
import { FarmaciaCreateComponent } from './farmacia-create/farmacia-create.component';
import { FarmaciaEditComponent } from './farmacia-edit/farmacia-edit.component';
import {AgmCoreModule} from '@agm/core'


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
      AgmCoreModule.forRoot({
          apiKey:'AIzaSyB6e8rof-WUMtAZd2ZfEmm1OBDQmjMDYUE'
      })
  ],
  declarations: [FarmaciaListComponent, FarmaciaDetailComponent, FarmaciaCreateComponent, FarmaciaEditComponent],
  providers:[FarmaciaService],
  exports: [FarmaciaListComponent],
  bootstrap: [FarmaciaListComponent]
})
export class FarmaciaModule { }
