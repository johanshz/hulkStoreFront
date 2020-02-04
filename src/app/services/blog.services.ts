import { Injectable } from '@angular/core';

@Injectable()
export class blogService {
    private blogObj : blog[] = [
        {
            imagenMiniatura: "assets/img/eventos/bautizoMin.jpg",
            nombreEvento: "Bautizo pepito",
            descripcionEvento: "Bautizo pepito Bautizo pepito  Bautizo pepito  Bautizo pepito  Bautizo pepito  Bautizo pepito .",
            imagenesEvento: [
                "assets/img/eventos/bautizo1.jpg",
                "assets/img/eventos/bautizo2.jpg",
                "assets/img/eventos/bautizo3.jpg"
            ],
            fechaEvento: new Date()
        },{
            imagenMiniatura: "assets/img/eventos/bodasMin2.jpg",
            nombreEvento: "Boda mariaca y yorman",
            descripcionEvento: "Boda mariaca y yorman Boda mariaca y yorman  Boda mariaca y yorman Boda mariaca y yorman  Boda mariaca y yorman  Boda mariaca y yorman .",
            imagenesEvento: [
                "assets/img/eventos/bodas4.jpg",
                "assets/img/eventos/bodas3.jpg",
                "assets/img/eventos/bodas2.jpg"
            ],
            fechaEvento: new Date()
        }
        ,{
            imagenMiniatura: "assets/img/eventos/bautizoMin2.jpg",
            nombreEvento: "Bautizo copito",
            descripcionEvento: "Bautizo copito Bautizo copito  Bautizo copito  Bautizo copito  Bautizo copito  Bautizo copito .",
            imagenesEvento: [
                "assets/img/eventos/bautizo4.jpg",
                "assets/img/eventos/bautizo5.jpg",
                "assets/img/eventos/bautizo3.jpg"
            ],
            fechaEvento: new Date()
        },{
            imagenMiniatura: "assets/img/eventos/bautizoMin3.jpg",
            nombreEvento: "Bautizo julanito",
            descripcionEvento: "Bautizo julanito Bautizo julanito  Bautizo julanito  Bautizo julanito  Bautizo julanito  Bautizo julanito .",
            imagenesEvento: [
                "assets/img/eventos/bautizo1.jpg",
                "assets/img/eventos/bautizo4.jpg",
                "assets/img/eventos/bautizo5.jpg"
            ],
            fechaEvento: new Date()
        },{
            imagenMiniatura: "assets/img/eventos/bodasMin.jpg",
            nombreEvento: "Boda pepe y pipa",
            descripcionEvento: "Boda pepe y pipa Boda pepe y pipa  Boda pepe y pipa Boda pepe y pipa  Boda pepe y pipa  Boda pepe y pipa .",
            imagenesEvento: [
                "assets/img/eventos/bodas1.jpg",
                "assets/img/eventos/bodas4.jpg",
                "assets/img/eventos/bodas5.jpg"
            ],
            fechaEvento: new Date()
        },{
            imagenMiniatura: "assets/img/eventos/bodasMin2.jpg",
            nombreEvento: "Boda juan y juanita",
            descripcionEvento: "Boda juan y juanita Boda juan y juanita  Boda juan y juanita Boda juan y juanita  Boda juan y juanita  Boda juan y juanita .",
            imagenesEvento: [
                "assets/img/eventos/bodas2.jpg",
                "assets/img/eventos/bodas5.jpg",
                "assets/img/eventos/bodas1.jpg"
            ],
            fechaEvento: new Date()
        },
        {
            imagenMiniatura: "assets/img/eventos/bodasMin2.jpg",
            nombreEvento: "Boda mariaca y yorman",
            descripcionEvento: "Boda mariaca y yorman Boda mariaca y yorman  Boda mariaca y yorman Boda mariaca y yorman  Boda mariaca y yorman  Boda mariaca y yorman .",
            imagenesEvento: [
                "assets/img/eventos/bodas4.jpg",
                "assets/img/eventos/bodas3.jpg",
                "assets/img/eventos/bodas2.jpg"
            ],
            fechaEvento: new Date()
        },
         {
        imagenMiniatura: "assets/img/eventos/mariana.jpg",
        nombreEvento: "quinces de mariana",
        descripcionEvento: "quincesMariana quincesMariana  quincesMariana  quincesMariana  quincesMariana  quincesMariana .",
        imagenesEvento: [
            "assets/img/eventos/quinces1.jpg",
            "assets/img/eventos/quinces2.jpg"
        ],
        fechaEvento: new Date()
    },
    {
        imagenMiniatura: "assets/img/eventos/pepita.jpg",
        nombreEvento: "quinces de pepita",
        descripcionEvento: "quincespepita quincespepita  quincespepita  quincespepita  quincespepita  quincespepita .",
        imagenesEvento: [
            "assets/img/eventos/quinces1.jpg",
            "assets/img/eventos/quinces2.jpg"
        ],
        fechaEvento: new Date()
    },
    {
        imagenMiniatura: "assets/img/eventos/juanita.jpg",
        nombreEvento: "quinces de juanita",
        descripcionEvento: "quincesJuanita quincesJuanita  quincesJuanita  quincesJuanita  quincesJuanita  quincesJuanita .",
        imagenesEvento: [
            "assets/img/eventos/quinces1.jpg",
            "assets/img/eventos/quinces2.jpg"
        ],
        fechaEvento: new Date()
    },    {
        imagenMiniatura: "assets/img/eventos/juanita.jpg",
        nombreEvento: "quinces de julanita",
        descripcionEvento: "quinces de julanita quinces de julanita  quinces de julanita  quinces de julanita  quinces de julanita  quinces de julanita .",
        imagenesEvento: [
            "assets/img/eventos/quinces1.jpg",
            "assets/img/eventos/quinces2.jpg"
        ],
        fechaEvento: new Date()
    }
];

    getBlog(): blog[] {
        return this.blogObj;
      }
      getEvento( idx: string ) {
        return this.blogObj[idx];
      }
}

export interface blog{
    imagenMiniatura: string;
    nombreEvento: string;
    descripcionEvento: string;
    imagenesEvento: string[];
    fechaEvento: Date;
};
