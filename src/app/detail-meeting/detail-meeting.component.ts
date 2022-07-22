import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPostingComponent } from '../dialog-posting/dialog-posting.component';
import { PostingService } from '../_services/posting.service';
import {MatAccordion} from '@angular/material/expansion';
import { DialogAddMateriComponent } from '../dialog-add-materi/dialog-add-materi.component';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';
import { MateriService } from '../_services/materi.service';
import { TugasService } from '../_services/tugas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DialogUpdateTugasComponent } from '../dialog-update-tugas/dialog-update-tugas.component';
import { DialogUpdateMateriComponent } from '../dialog-update-materi/dialog-update-materi.component';
import { PrintSilabusComponent } from '../print-silabus/print-silabus.component';
import { DialogUpdatePostingComponent } from '../dialog-update-posting/dialog-update-posting.component';
import { CookieService } from 'ngx-cookie-service';
import { DialogUploadComponent } from '../dialog-upload/dialog-upload.component';

@Component({
  selector: 'app-detail-meeting',
  templateUrl: './detail-meeting.component.html',
  styleUrls: ['./detail-meeting.component.scss']
})
export class DetailMeetingComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  sub: any;
  y! : number;
  no! : number;

  Level  =  this.cookieService.get('Level');

  postingList: any =[];
  materiList: any =[];
  tugasList: any =[];
  isActive = true;

  constructor(
    private dialog: MatDialog,
    private postingService: PostingService,
    private materiService: MateriService,
    private tugasService: TugasService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.router.routerState.snapshot.url;
    console.log(this.sub);
    var splitted = this.sub.split("/", 3); 
    this.y = +splitted[2];

    this.readPosting(this.y),
    this.readMateri(this.y),
    this.readTugas(this.y)
  }

  public detail(id: number){
    this.router.navigate(['/nilai-meeting',id])
  }

  public print(id: number){
    this.router.navigate(['/download-silabus',id])
  }
  
  public readPosting(id: number){
    this.postingService.getById(id).then(val =>{
      this.postingList=val
    })
    if(this.postingList != null){
        this.isActive = false
    }else{
        this.isActive = true
    }
  }

  public readMateri(id: number){
    this.materiService.getById(id).then(val =>{
      this.materiList = val
    })
  }

  public readTugas(id: number){
    this.tugasService.getById(id).then(val =>{
      this.tugasList = val})
  }

  public addMaterial(){
    const dialogRef = this.dialog.open(DialogAddMateriComponent);
    dialogRef.afterClosed().subscribe(()=>{
      this.readMateri(this.y);})
  }

  public addTask(){
    const dialogRef = this.dialog.open(DialogAddTaskComponent);
    dialogRef.afterClosed().subscribe(()=>{
      this.readTugas(this.y);})
  }

  public addPosting(){
    const dialogRef = this.dialog.open(DialogPostingComponent);
    dialogRef.afterClosed().subscribe(()=>{
        this.readPosting(this.y);})
  }

  public deleteMateri(id: number){
    Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus data?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus'
    }).then((result) => {
      if (result.isConfirmed) {
        this.materiService.delete(id).subscribe(val => {
          Swal.fire({
            icon: 'success',
            title: 'Terhapus!',
            showConfirmButton: false,
            timer: 2000
          })
          this.readMateri(this.y)
        })
      }
    })
    }

    public deleteTugas(id: number){
        Swal.fire({
          title: 'Apakah Anda yakin ingin menghapus data?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Hapus'
        }).then((result) => {
          if (result.isConfirmed) {
            this.tugasService.delete(id).subscribe(val => {
              Swal.fire({
                icon: 'success',
                title: 'Terhapus!',
                showConfirmButton: false,
                timer: 2000
              })
              this.readTugas(this.y)
            })
          }
        })
    }
    
    public updateMateri(data: any){
        const dialogRef = this.dialog.open(DialogUpdateMateriComponent, {data: data});
        dialogRef.afterClosed().subscribe(()=>{
          this.readMateri(this.y);
        })
    }
    
    public updateTugas(data: any){
        const dialogRef = this.dialog.open(DialogUpdateTugasComponent, {data: data});
        dialogRef.afterClosed().subscribe(()=>{
          this.readTugas(this.y);
        })
    }

    public addTugasPeserta(data: any){
        const dialogRef = this.dialog.open(DialogUploadComponent, {data: data});
        dialogRef.afterClosed().subscribe(()=>{
          this.readTugas(this.y);
        })
    }

    public updatePosting(data: any){
        const dialogRef = this.dialog.open(DialogUpdatePostingComponent, {data: data});
        dialogRef.afterClosed().subscribe(()=>{
          this.readPosting(this.y);
        })
    }
}