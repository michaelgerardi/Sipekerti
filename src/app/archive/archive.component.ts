import { Component, OnInit } from '@angular/core';
import { MateriService } from '../_services/materi.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  materiList: any =[];

  constructor(
    private materiService: MateriService
  ) { }

  ngOnInit(): void {
    this.readMateri();
  }

  public readMateri(){
    this.materiService.getAll().then(val =>{
      this.materiList = val
      console.log(val);
      
    })
  }
}
