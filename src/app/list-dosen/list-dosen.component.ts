import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPengajarComponent } from '../dialog-add-pengajar/dialog-add-pengajar.component';
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
}
