import { Component, OnInit } from '@angular/core';
import { TugasService } from '../_services/tugas.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
    
    constructor(
        private tugasService: TugasService
      ) {}
    
      nilaiList: any =[];
      rerata: any;
    
      ngOnInit(): void {
        this.readNilai()
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
