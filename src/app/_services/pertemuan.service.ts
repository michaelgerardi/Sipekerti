import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pertemuan } from '../_models/pertemuan.model';

@Injectable({
    providedIn: 'root'
  })

export class PertemuanService{
    private BASE_URL: string= 'http://localhost:8080/';
    constructor( private http: HttpClient){}

    getById(id:number){
        return this.http.get(this.BASE_URL + 'meeting/' + id).toPromise().then(res => res as Pertemuan[]);
    }

    getByIdpertemuan(id:number){
        return this.http.get(this.BASE_URL + 'getpertemuan/' + id).toPromise().then(res => res as Pertemuan[]);
    }

    getAll(){
        return this.http.get(this.BASE_URL + 'pertemuan').toPromise().then(res => res as Pertemuan[]);
    }

    insert(data: any){
        return this.http.post(this.BASE_URL + 'pertemuan/', JSON.stringify(data));
    }

    update( id: number, data: any ) {
        return this.http.put( this.BASE_URL + 'pertemuan/' + id, JSON.stringify(data) );
    }

    delete(id:number){
        return this.http.delete(this.BASE_URL + 'pertemuan/' + id);
    }
}