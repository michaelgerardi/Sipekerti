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
        //data = {"id":"","id_kelas":"37","id_pengajar":"743","nama_pertemuan":"inject","tanggal_pertemuan":"2022-07-25T17:00:00.000Z","deskripsi_pertemuan":"s","tempat":"d","sub_cp":"d","materi":"d","indikator":"d","metode_penilaian":"d","metode_pembelajaran":"d","pustaka":"d","bobot":"2"}
        //console.log("dt ",JSON.stringify(data));
        
        return this.http.post(this.BASE_URL + 'pertemuan', JSON.stringify(data));
    }

    update( id: number, data: any ) {
        return this.http.put( this.BASE_URL + 'pertemuan/' + id, JSON.stringify(data) );
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