import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Nilai } from "../_models/nilai.model";

@Injectable({
    providedIn: 'root'
})
export class NilaiService{
    private BASE_URL: string='http://localhost:8080/';
    constructor( private http: HttpClient){}

    getAll(id: number){
        return this.http.get(this.BASE_URL + 'getnilai/'+id).toPromise().then(res => res as Nilai[]);
    }

    getId(id: number){
        return this.http.get(this.BASE_URL + 'nilai-tugas/'+id).toPromise().then(res => res as Nilai[]);
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