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

  pengajarList: any =[]

  ngOnInit(): void {
  }

  public pengajar(){

  }
}
