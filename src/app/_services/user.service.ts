import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../_models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private BASE_URL: string='http://localhost:8080/';
    constructor( private http: HttpClient){}

    public login(data: any){
        return this.http.post(this.BASE_URL + 'login', data)
    }

    public registrasi(data: any){
        return this.http.post(this.BASE_URL + 'register', data)
    }

    public addPengajar(data: any){
        return this.http.post(this.BASE_URL + 'addPengajar', data)
    }

    public peserta(){
        return this.http.get(this.BASE_URL + 'peserta').toPromise().then(res => res as User[])
    }

    public pengajar(){
        return this.http.get(this.BASE_URL + 'pengajar').toPromise().then(res => res as User[])
    }

    public deleteUser(id: any){
        return this.http.delete(this.BASE_URL + 'delete/' + id)
    }

    public history(){
        return this.http.get(this.BASE_URL + 'historyDosen').toPromise().then(res => res as User[])
    }

    public restore(id: any){
        return this.http.get(this.BASE_URL + 'restoreDosen/' + id).toPromise().then(res => res as User[]);
    }

    public update( id: number, data: any ) {
        return this.http.put( this.BASE_URL + 'update/' + id, JSON.stringify(data) );
    }
}