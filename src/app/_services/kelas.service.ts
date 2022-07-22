import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kelas } from '../_models/kelas.model';

@Injectable({
  providedIn: 'root'
})
export class KelasService{
  
    private BASE_URL: string= 'http://localhost:8080/';
    constructor(private http: HttpClient) { }

    getAll(){
      return this.http.get(this.BASE_URL + 'kelas/',).toPromise().then(res => res as Kelas[]);
    }

    insert(data: any){
      return this.http.post(this.BASE_URL + 'kelas/',JSON.stringify(data) );
    }

    delete(id: any){
      return this.http.delete(this.BASE_URL+ 'kelas/' +id);
    }

    public history(){
        return this.http.get(this.BASE_URL + 'historyKelas').toPromise().then(res => res as Kelas[])
    }

    public restore(id: any){
        return this.http.get(this.BASE_URL + 'restore/' + id).toPromise().then(res => res as Kelas[]);
    }

    update( id: number, data: any ) {
      return this.http.put( this.BASE_URL + 'kelas/' + id, JSON.stringify(data) );
    }

    getClassById( id: number ) {
      return this.http.get( this.BASE_URL+'kelas/'+id );
    }
}