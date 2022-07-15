import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DialogAddMeetingComponent } from '../dialog-add-meeting/dialog-add-meeting.component';
import { PertemuanService } from '../_services/pertemuan.service';
import { DialogUpdateMeetingComponent } from '../dialog-update-meeting/dialog-update-meeting.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

    pertemuanList: any =[];
    sub: any;
    y! : number;
    Level  =  this.cookieService.get( 'level' );

    constructor(
      private router: Router,
      private dialog: MatDialog,
      private pertemuanService: PertemuanService,
      private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    //get Id Kelas
    this.sub = this.router.routerState.snapshot.url;
    console.log(this.sub);
    var splitted = this.sub.split("/", 3); 
    this.y = +splitted[2];
   //  console.log(splitted);
   //  console.log(y);
    
    this.readMeeting(this.y);
  }

  public detail(id: number){
    this.router.navigate(['/detail-meeting',id])
  }

  public print(id: number){
    this.router.navigate(['/download-silabus',id])
  }

  public readMeeting(id: number){
    this.pertemuanService.getById(id).then(val =>{
      this.pertemuanList = val
       console.log(val);
     })
  }

  public create(){
    const dialogRef = this.dialog.open(DialogAddMeetingComponent);
    dialogRef.afterClosed().subscribe(()=>{
      this.readMeeting(this.y)
    })
  }

  public delete(id: number){
    Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus data?',
      icon: 'warning',
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pertemuanService.delete(id).subscribe(val => {
          Swal.fire({
            icon: 'success',
            title: 'Terhapus!',
            showConfirmButton: false,
            timer: 2000
          })
          this.readMeeting(this.y)
        })
      }
    })
  }

  public update(data: any){
    const dialogRef = this.dialog.open(DialogUpdateMeetingComponent, {data: data});
    dialogRef.afterClosed().subscribe(()=>{
      this.readMeeting(this.y);
    })
  }

//  public print(id:number){
//    const dialogRef = this.dialog.open(PrintSilabusComponent, {data: id});
//    dialogRef.afterClosed().subscribe(()=>{
//        this.readMeeting(this.y);
//    })
//  }
}