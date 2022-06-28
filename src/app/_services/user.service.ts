import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private BASE_URL: string='http://localhost:8080/';
    constructor( private http: HttpClient){}

    regisAccount(data: any){
        return this.http.post(this.BASE_URL + 'register', JSON.stringify(data));
    }

    update( id: number, data: any ) {
        return this.http.put( this.BASE_URL + 'login/' + id, JSON.stringify(data) );
    }
}