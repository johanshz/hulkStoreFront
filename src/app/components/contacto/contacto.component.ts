import { Component, OnInit, Input } from '@angular/core';
import { ContactoService, Contacto } from '../../services/contact.services';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
   
  contacto:Contacto[] = [];
  nombreContacto:string = "";
  emailContacto:string = "";
  telefonoContacto:string;
  fechaContacto:string;



  constructor( private  _contactoService: ContactoService
             ) { }


  ngOnInit() {
    this.contacto = this._contactoService.getContacto();
  }
  enviarInformacion(){
    this.nombreContacto = document.getElementById("nombreContacto").textContent;
    this.emailContacto = document.getElementById("emailContacto").textContent;
    //this.telefonoContacto = document.getElementById("telefonoContacto");
  //  this.fechaContacto = document.getElementById("fechaShoot");

  }

}
