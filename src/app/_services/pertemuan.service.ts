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

    getByIdPengajar(id: number){
        return this.http.get(this.BASE_URL + 'pertemuanPengajar/' + id).toPromise().then(res => res as Pertemuan[]);
    }

    getAll(){
        return this.http.get(this.BASE_URL + 'pertemuan').toPromise().then(res => res as Pertemuan[]);
    }

    insert(data: any){
        return this.http.post(this.BASE_URL + 'pertemuan', data);
    }

    update( id: number, data: any ) {
        return this.http.put( this.BASE_URL + 'pertemuan/' + id, data );
    }

    delete(id:number){
        return this.http.delete(this.BASE_URL + 'pertemuan/' + id);
    }

    history(){
        return this.http.get(this.BASE_URL + 'historyPertemuan').toPromise().then(res => res as Pertemuan[])
    }

    restore(id: any){
        return this.http.get(this.BASE_URL + 'restorePertemuan/' + id).toPromise().then(res => res as Pertemuan[]);
    }
}