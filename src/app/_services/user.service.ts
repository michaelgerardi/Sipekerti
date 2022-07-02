import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private BASE_URL: string='http://localhost:8080/';
    constructor( private http: HttpClient){}

    //public userregistration(email:any, password:any){
    //    return this.http.post<any>(this.BASE_URL + '/register',
    //    {
    //        email,password
    //    }
    //    ).pipe(map(User=>{
    //        return User;
    //    }));
    //}
    public register(email: string, password: string): Observable<any> {
        return this.http.post(this.BASE_URL + '/register', {
          email,
          password
        });
      }

    public userlogin(email:any,password:any){
        return this.http.post<any>(this.BASE_URL + '/login',
        {email,password}
        ).pipe(map(User=>{
            this.setToken(User.email);
            //console.log(User.email);
            
            // this.getLoggedInName.email(true);
            return User;
        }));
    }

    setToken(token:string){
        localStorage.setItem('token', token);
    }
}