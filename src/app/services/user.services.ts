import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { UserComponent } from '../components/user/user.component';

@Injectable()
export class userService {
 public url:string = 'http://localhost:8080/api/usuarios/';
// public urlRol:string = 'http://localhost:8080/api/usuarios/rol';
 public urlAddUser:string='http://localhost:8080/api/usuarios/'
;

    constructor(private http: HttpClient){
    }
   getUser(): Observable<UserComponent[]>{
       return this.http.get(this.url).pipe(
           map(response => response as UserComponent[])
       );
   }
  /* getRoles(): Observable<UserComponent[]>{
    return this.http.get(this.urlRol).pipe(
        map(response => response as UserComponent[])
    );
}*/
setUser(User):Observable<any>{
    let json = JSON.stringify(User);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlAddUser,json,{headers:headers});
}

}