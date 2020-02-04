import { Injectable } from '@angular/core';

@Injectable()
export class ContactoService {
    private ContactoObj : Contacto[] = [
        {
        contacto: "Contacto",
        mensajeDCescricion: "me comunicare lo antes posible.",
        camposMarcados:"los campos marcado con * son obligatorios"
    }
];

    getContacto(): Contacto[] {
        return this.ContactoObj;
      }
}

export interface Contacto{
    contacto: string;
    mensajeDCescricion: string;
    camposMarcados: string;

};