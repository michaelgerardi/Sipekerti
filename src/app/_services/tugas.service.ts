import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tugas } from "../_models/tugas.model";

@Injectable({
    providedIn: 'root'
})
export class TugasService{
    private BASE_URL: string='http://localhost:8080/';
    constructor( private http: HttpClient){}

    getById(id:number){
        return this.http.get(this.BASE_URL + 'task/' + id).toPromise().then(res => res as Tugas[]);
    }

    getAll(){
        return this.http.get(this.BASE_URL + 'tugas/').toPromise().then(res => res as Tugas[]);
    }

    insert(data: any){
        return this.http.post(this.BASE_URL + 'tugas/', JSON.stringify(data));
    }

    delete(id: number){
        return this.http.delete(this.BASE_URL + 'tugas/'+id);
    }

    update( id: number, data: any ) {
        return this.http.put( this.BASE_URL + 'tugas/' + id, JSON.stringify(data) );
    }
}