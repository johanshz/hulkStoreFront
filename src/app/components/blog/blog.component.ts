import { Component, OnInit } from '@angular/core';
import { blogService, blog } from '../../services/blog.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  blogObj: blog[];
  constructor( private _blogService: blogService ,
               private router: Router) { }

  verEvento( idx:number ) {
    debugger;
    this.router.navigate( ['/evento', idx] );
  }
  ngOnInit() {
    this.blogObj = this._blogService.getBlog();
  }

}
