import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Materi } from "../_models/materi.model";

@Injectable({
    providedIn: 'root'
})
export class MateriService{
    private BASE_URL: string='http://localhost:8080/';
    constructor( private http: HttpClient){}

    getById(id:number){
        return this.http.get(this.BASE_URL + 'namapertemuan/' + id).toPromise().then(res => res as Materi[]);
    }

    getAll(){
        return this.http.get(this.BASE_URL + 'joinmateri/').toPromise().then(res => res as Materi[]);
    }

    insert(data: any){
        return this.http.post(this.BASE_URL + 'materi/', JSON.stringify(data));
    }

    update( id: number, data: any ) {
        return this.http.put( this.BASE_URL + 'materi/' + id, JSON.stringify(data) );
    }
    
    delete(id: number){
        return this.http.delete(this.BASE_URL + 'materi/'+id);
    }
}