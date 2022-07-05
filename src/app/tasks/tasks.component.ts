import { Component, OnInit } from '@angular/core';
import { PertemuanService } from '../_services/pertemuan.service';
import { TugasService } from '../_services/tugas.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
    
    constructor(
        private tugasService: TugasService,
        private userService: UserService,
        private pertemuanService: PertemuanService
      ) {}
    
      pesertaList: any = [];
      pertemuanList: any = [];
      nilaiList: any =[];
      rerata: any;
    
      ngOnInit(): void {
        this.readNilai(),
        this.peserta(),
        this.pertemuan()
      }
    
      public peserta(){
        this.userService.peserta().then(val => {
            this.pesertaList = val
            console.log(val);
        })
      }

      public pertemuan(){
        this.pertemuanService.getAll().then(val =>{
            this.pertemuanList = val
            console.log(val);
            
        })
      }
      public readNilai(){
        this.tugasService.getAll().then(val =>{
          var total = 0
          var counter = 0
          for(const i of val){
            total += parseInt(i.nilai)
            counter += 1
          }
          this.nilaiList=val
          this.rerata = total/counter
        })
      }
}
