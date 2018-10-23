import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import {PacienteModule} from './paciente/paciente.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    PacienteModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
