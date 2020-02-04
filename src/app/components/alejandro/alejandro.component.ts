import { Component, OnInit } from '@angular/core';
import { AlejandroService, Alejandro } from '../../services/alejandro.services';

@Component({
  selector: 'app-alejandro',
  templateUrl: './alejandro.component.html'
})
export class AlejandroComponent implements OnInit {
 // debugger;
 AlejoObj: Alejandro [] = [];
  constructor( private _alejandroService: AlejandroService ) { }

  ngOnInit() {
   this.AlejoObj = this._alejandroService.getAlejandro();
  }
 

}
