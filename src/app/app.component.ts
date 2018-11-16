import { Component } from '@angular/core';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  title: string;
 
  
  ngOnInit() : void {
      this.title = "Medisistemas";
      this.ingresoService.start();
  }
  
  constructor( private ingresoService: IngresoService)  {   }
  
  logout(): void {
        this.ingresoService.logout()
    }
}
