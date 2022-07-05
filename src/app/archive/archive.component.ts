import { Component, OnInit } from '@angular/core';
import { MateriService } from '../_services/materi.service';
import { PertemuanService } from '../_services/pertemuan.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  materiList: any =[];
  pertemuanList: any =[];

  constructor(
    private materiService: MateriService,
    private pertemuanService: PertemuanService
  ) { }

  ngOnInit(): void {
    this.readMateri();
    this.pertemuan();
  }

  public readMateri(){
    this.materiService.getAll().then(val =>{
      this.materiList = val
      console.log(val);
      
    })
  }
  public pertemuan(){
    this.pertemuanService.getAll().then(val =>{
        this.pertemuanList = val
        console.log(val);
        
    })
  }
}
