import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-list-dosen',
  templateUrl: './list-dosen.component.html',
  styleUrls: ['./list-dosen.component.scss']
})
export class ListDosenComponent implements OnInit {

  constructor(
    private userService: UserService
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
}
