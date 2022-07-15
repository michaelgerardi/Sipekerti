import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { PertemuanService } from '../_services/pertemuan.service';

@Component({
  selector: 'app-print-silabus',
  templateUrl: './print-silabus.component.html',
  styleUrls: ['./print-silabus.component.scss']
})
export class PrintSilabusComponent {

    @ViewChild('pdfTable', {static: false}) el!: ElementRef
  
    public downloadAsPDF() {
       let pdf = new jsPDF('l', 'pt', 'a4');
       
       pdf.html(this.el.nativeElement, {
          callback: (pdf) =>{
              pdf.save("silabus.pdf")
          }
       })
    }

    pertemuanList: any =[];
    y! : number;
    no! : number;
    sub: any;

    constructor(
        private pertemuanService: PertemuanService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.sub = this.router.routerState.snapshot.url;
        console.log(this.sub);
        var splitted = this.sub.split("/", 3); 
        this.y = +splitted[2];
        
        this.readMeeting(this.y);
    }

    public readMeeting(id: number){
        this.pertemuanService.getByIdpertemuan(id).then(val =>{
          this.pertemuanList = val
           console.log(val);
        })
      }
}