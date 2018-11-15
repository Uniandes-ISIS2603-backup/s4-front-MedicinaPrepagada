import {Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {PacienteService} from '../paciente.service';
import {Paciente} from '../paciente';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router/';
import {TarjetaCredito} from '../../tarjeta-credito/tarjeta-credito';
import {CitaMedica} from '../../cita-medica/cita-medica';
import {CitaLaboratorio} from '../../citalaboratorio/citalaboratorio';
import {Factura} from '../../factura/factura';
import {HistoriaClinica} from '../../historiaClinica/historiaClinica';
@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit, OnChanges {

    /**
     * constructor del componente
     */
  constructor(private pacienteService: PacienteService,
              private toastr: ToastrService,
              private route: ActivatedRoute) { }
  /**
   * el id del autor a actualizar
   */
  @Input() paciente_id;
  
  @Output() cancel = new EventEmitter();
  
  @Output() update = new EventEmitter();
  
  paciente: Paciente;
  
  tarjetasCredito: TarjetaCredito[];
  
  citasMedicas: CitaMedica[];
    
  citasLaboratorio: CitaLaboratorio[];
  
  facturas: Factura[];
    
  historiasClinicas: HistoriaClinica[];
  
  getPaciente():void{
      this.pacienteService.getPaciente(this.paciente_id)
          .subscribe(paciente => {this.paciente = paciente;
          },
          err=>{
              this.toastr.error(err, "Error");
          });
  }
  
  getTarjetasCredito(): void{
      this.pacienteService.getTarjetasCreditoPaciente(this.paciente_id)
          .subscribe(tarjetasCredito => {this.tarjetasCredito = tarjetasCredito;},
          err => {
              this.toastr.error(err, "Error");
          });
  }
  
  getCitasMedicas():void{
      this.pacienteService.getCitasMedicasPaciente(this.paciente_id)
          .subscribe(citasMedicas =>{
              this.citasMedicas = citasMedicas;
      }, err =>{
          this.toastr.error(err, "Error");
      }
      );
  }
  
  getCitasLab():void{
      this.pacienteService.getCitasLaboratorioPaciente(this.paciente_id)
          .subscribe(citasLaboratorio => {
              this.citasLaboratorio = citasLaboratorio;
      }, err =>{
          this.toastr.error(err, "Error");
      });
  }
  
  getFacturas():void{
      this.pacienteService.getFacturasPaciente(this.paciente_id)
          .subscribe(facturas =>{
              this.facturas = facturas;
      }, err =>{
          this.toastr.error(err, "Error");
      });
  }
  
  getHistoriasClinicas():void{
      this.pacienteService.getHistoriasClinicasPaciente(this.paciente_id)
          .subscribe(historiasClinicas => {
              this.historiasClinicas = historiasClinicas;
      }, err => {
          this.toastr.error(err, "Error");
      })
  }
  
  editPaciente():void{
      var paciente_edit={
          id: this.paciente.id,
          login: this.paciente.login,
          contrasena: this.paciente.contrasena,
          tipoUsuario: this.paciente.tipoUsuario,
          documentoIdentidad: this.paciente.documentoIdentidad,
          nombre: this.paciente.nombre,
          fechaNacimiento: this.paciente.fechaNacimiento,
          direccion: this.paciente.direccion,
          numeroContacto: this.paciente.numeroContacto,
          mail: this.paciente.mail,
          eps: this.paciente.eps,
          citasMedicas: this.citasMedicas,
          tarjetasCredito: this.tarjetasCredito
      }
      console.log(paciente_edit);
      this.pacienteService.updatePaciente(paciente_edit)
          .subscribe(() => {
              this.toastr.success("La informacion del pacient fue actualizada", "Editar Paciente");
      }, err =>{
          this.toastr.error(err, "Error");
      });
  }
  
  cancelEditon():void{
      this.cancel.emit();
  }
  
  
  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.paciente = new Paciente;
      this.citasMedicas = [];
      this.citasLaboratorio = [];
      this.tarjetasCredito = [];
      this.facturas = [];
      this.historiasClinicas = [];
      this.getPaciente();
  }
  
    ngOnChanges(){
        this.ngOnInit();
    }

}
