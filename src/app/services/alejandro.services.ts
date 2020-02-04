import { Injectable } from '@angular/core';

@Injectable()
export class AlejandroService {
    private AlejoObj : Alejandro[] = [
        {
        img: "assets/img/alejandro.jpg",
        nombre: "Alejandro Usma",
        presentacion: "Hola soy alejandro usma fotogrado con mas 10 años de experiencia."
    }
];

    getAlejandro(): Alejandro[] {
        return this.AlejoObj;
      }
}

export interface Alejandro{
    img: string;
    nombre: string;
    presentacion: string;
};
