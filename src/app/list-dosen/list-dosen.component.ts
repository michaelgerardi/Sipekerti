import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DialogAddPengajarComponent } from '../dialog-add-pengajar/dialog-add-pengajar.component';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';
import { DialogRestoreDosenComponent } from '../dialog-restore-dosen/dialog-restore-dosen.component';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-list-dosen',
  templateUrl: './list-dosen.component.html',
  styleUrls: ['./list-dosen.component.scss']
})
export class ListDosenComponent implements OnInit {

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  pengajarList: any =[];
  pesertaList: any = [];

  ngOnInit(): void {
    this.pengajar(),
    this.peserta()
  }

  public pengajar(){
    this.userService.pengajar().then(val => {
        this.pengajarList = val
    })
  }

  public peserta(){
    this.userService.peserta().then(val => {
        this.pesertaList = val
        console.log(val);
    })
  }

  public create(){
    const dialogRef = this.dialog.open(DialogAddPengajarComponent);
    dialogRef.afterClosed().subscribe(()=>{
      this.pengajar()
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
          this.userService.deleteUser(id).subscribe(val => {
            Swal.fire({
              icon: 'success',
              title: 'Terhapus!',
              showConfirmButton: false,
              timer: 2000
            })
            this.pengajar();
            this.peserta()
          })
        }
      })
    }

    public restore(){
        const dialogRef = this.dialog.open(DialogRestoreDosenComponent);
        dialogRef.afterClosed().subscribe(()=>{
        this.pengajar();
        this.peserta();
        })
    }

    public update(data: any){
        const dialogRef = this.dialog.open(DialogProfileComponent, {data: data});
        dialogRef.afterClosed().subscribe(()=>{
          this.pengajar();
          this.peserta();
        })
      }
}
