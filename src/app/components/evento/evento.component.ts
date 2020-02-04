import { Component, OnInit } from '@angular/core';
import { blogService, blog } from '../../services/blog.services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  evento:any = {};
  constructor( private _blogService:blogService,
              private activatedRoute: ActivatedRoute
              ){
                    this.activatedRoute.params.subscribe( params => {
                      this.evento = this._blogService.getEvento( params['id'] );
                   })
                }
}
