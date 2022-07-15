import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posting } from '../_models/posting.model';

@Injectable({
  providedIn: 'root'
})
export class PostingService{
    private BASE_URL: string= 'http://localhost:8080/';
    constructor(private http: HttpClient) { }

    getById(id: number){
        return this.http.get(this.BASE_URL + 'posting/' + id).toPromise().then(res => res as Posting[]);
    }

    getAll(){
      return this.http.get(this.BASE_URL + 'komentar/').toPromise().then(res => res as Posting[]);
    }

    insert(data: any){
      return this.http.post(this.BASE_URL + 'add-posting/',JSON.stringify(data) );
    }

    update( id: number, data: any ) {
        return this.http.put( this.BASE_URL + 'update-posting/' + id, JSON.stringify(data) );
    }

    delete(id: number){
      return this.http.delete(this.BASE_URL+'hapus-posting/'+id);
    }
}