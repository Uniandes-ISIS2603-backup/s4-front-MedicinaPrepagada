/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Medico {

  private nombre: string;
  private telefono: number;
  private correo: string;
  private documentoMedico: number;

  constructor(nombre: string, telefono: number, correo: string, documentoMedico: number,) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
    this.documentoMedico = documentoMedico;
  }

  getNombre(){
    return this.nombre;
  }

  getTelefono(){
    return this.telefono;
  }

  getCorreo(){
    return this.correo;
  }

  getDocumentoMedico(){
    return this.documentoMedico;
  }
}

