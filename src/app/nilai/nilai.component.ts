import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NilaiService } from '../_services/nilai.service';

@Component({
  selector: 'app-nilai',
  templateUrl: './nilai.component.html',
  styleUrls: ['./nilai.component.scss']
})
export class NilaiComponent implements OnInit {

  constructor(
    private nilaiService: NilaiService,
    private router: Router
  ) { }

  dataNilai: any =[];
  rerata: any;
  statusNilai: any;

  y! : number;
  no! : number;
  sub: any;

  ngOnInit(): void {
    this.sub = this.router.routerState.snapshot.url;
    console.log(this.sub);
    var splitted = this.sub.split("/", 3); 
    this.y = +splitted[2];

    this.readNilai(this.y)
  }

  public readNilai(id:number){
    this.nilaiService.getId(id).then(val =>{
      var total = 0
      var counter = 0
      var status =0
      var statusNilai=[]
      var statusLulus = ""
      for(const i of val){
        total += parseInt(i.nilai)
        counter += 1
        status = parseInt(i.nilai)
        if(status >= 70){
            statusNilai.push(",LULUS")
        }
        else{
            statusNilai.push("TiDAK LULUS")
        }
      }
      this.dataNilai=val
      this.rerata = total/counter
      //this.statusNilai = statusLulus
      console.log(statusNilai);
    })
  }
}
