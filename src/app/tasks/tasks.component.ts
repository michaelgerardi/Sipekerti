import { Component, OnInit } from '@angular/core';
import { NilaiService } from '../_services/nilai.service';
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
        private pertemuanService: PertemuanService,
        private nilaiService: NilaiService
      ) {}
    
      pesertaList: any = [];
      pertemuanList: any = [];
      nilaiList: any =[];
      dataNilai: any =[];
      rerata: any;
      statusNilai: any;
    
      ngOnInit(): void {
       // this.readNilai(),
        this.peserta(),
        this.pertemuan()
        //this.nilai(id)
      }
    
    //  public nilai(id: number){
    //    this.nilaiService.getId(id).then(val => {
    //        this.dataNilai = val
    //    })
    //  }

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

    //  public readNilai(){
    //    this.nilaiService.getId().then(val =>{
    //      var total = 0
    //      var counter = 0
    //      var status =''
    //      for(const i of val){
    //        total += parseInt(i.nilai)
    //        counter += 1
    //        status = i.nilai
    //        if(status >= '70'){
    //            "LULUS"
    //        }
    //        else{
    //            "TIDAK LULUS"
    //        }
    //      }
    //      this.dataNilai=val
    //      this.rerata = total/counter
    //      this.statusNilai = status
    //    })
    //  }

}
