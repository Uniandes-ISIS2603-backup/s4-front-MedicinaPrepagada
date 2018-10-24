/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Medico {

  private idMedico: number;
  private login: string;
  private contrasena: string;
  private tipoUsuario: string;
  private documentoIdentidad: number;
  private nombre: string;
  private telefono: number;
  private correo: string;
  private documentoMedico: number;
  private firma: string;
  private descripcion: string;
  private especialidad: string;
  
  constructor(idMedico: number,login: string,contrasena: string,tipoUsuario:string,documentoIdentidad: number, nombre: string, telefono: number, correo: string, documentoMedico: number,firma:string, descripcion: string, especialidad: string) {
    this.idMedico = idMedico;
    this.login = login;
    this.contrasena = contrasena;
    this.tipoUsuario = tipoUsuario;
    this.documentoIdentidad = documentoIdentidad;
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
    this.documentoMedico = documentoMedico;
    this.firma = firma;
    this.descripcion = descripcion;
    this.especialidad = especialidad;
  }

  getIdMedico(){
    return this.idMedico;
  }
  
  getLogin(){
    return this.login;
  }
  
  getContrasena(){
    return this.contrasena;
  }
  
  getTipoUsuario(){
    return this.tipoUsuario;
  }
  
  getDocumentoIdentidad(){
    return this.documentoIdentidad;
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
  
  getFirma(){
    return this.firma;
  }
  
  getDescripcion(){
    return this.descripcion;
  }
  
  getEspecialidad(){
    return this.especialidad;
  }
}



