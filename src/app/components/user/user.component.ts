import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/user.services';
import { User } from '../Models/usuario';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ userService ]
})
export class UserComponent implements OnInit {
  //usuarioForm: NgForm;
  public usuario: User;
  users: any[];
  roles: any[];
  constructor(
    private _userService: userService,
   
  ) {
    this.usuario = new User('','',0,'');
   }
  
  onSubmit(form){
    this._userService.setUser(this.usuario).subscribe(
      response =>{
          console.log(response);
          form.reset();
      },
      error =>{
        console.log(<any>error);
      }
    )
    
  }
  ngOnInit() {
    this._userService.getUser().subscribe(
      result => {
        console.log(result);
        this.users = result;
      },
      error => {
        console.log(<any>error);
      }
    )
   /* this._userService.getRoles().subscribe(
      result => {
        console.log(result);
        this.roles = result;
      },
      error => {
        console.log(<any>error);
      }
    )*/
  }
 

}
