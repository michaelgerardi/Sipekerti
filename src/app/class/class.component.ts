import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddClassComponent } from '../dialog-add-class/dialog-add-class.component';
import { KelasService } from '../_services/kelas.service';
import { DialogUpdateClassComponent } from '../dialog-update-class/dialog-update-class.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { DialogRestoreKelasComponent } from '../dialog-restore-kelas/dialog-restore-kelas.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})

export class ClassComponent implements OnInit {

    kelasList: any =[];
    kelasListDosen: any =[];
  
    constructor(
        public dialog: MatDialog,
        public kelasService: KelasService,
        private router: Router,
        public cookieService: CookieService
    ) { }

    Level  =  this.cookieService.get('Level');
    ngOnInit(): void {
        this.readClass();
        this.readClassDosen();
    }

    public readClass(){
        this.kelasService.getAll().then(val =>{
        this.kelasList=val
        console.log(val);
        })
    }

    public readClassDosen(){
        this.kelasService.getAll().then(val =>{
        this.kelasListDosen=val
        console.log(val);
        })
    }

    public create() {
        const dialogRef = this.dialog.open(DialogAddClassComponent);
        dialogRef.afterClosed().subscribe(()=>{
        this.readClass();
        })
    }

    public delete(id: any){
        Swal.fire({
        title: 'Apakah Anda yakin ingin menghapus data?',
        icon: 'warning',
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        }).then((result) => {
        if (result.isConfirmed) {
            this.kelasService.delete(id).subscribe(val => {
            Swal.fire({
                icon: 'success',
                title: 'Terhapus!',
                showConfirmButton: false,
                timer: 2000
            })
            this.readClass()
            })
        }
        })
    }

    public restore(){
        const dialogRef = this.dialog.open(DialogRestoreKelasComponent);
        dialogRef.afterClosed().subscribe(()=>{
        this.readClass();
        })
    }

    public update(data: any){
        const dialogRef = this.dialog.open(DialogUpdateClassComponent, {data: data});
        dialogRef.afterClosed().subscribe(()=>{
        this.readClass();
        })
    }

    public meetingId(id: number){
        this.router.navigate(['/list-meeting',id])
    }

    public anggota(){
        this.router.navigate(['/anggota-kelas'])
    }
}
