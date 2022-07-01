import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-print-silabus',
  templateUrl: './print-silabus.component.html',
  styleUrls: ['./print-silabus.component.scss']
})
export class PrintSilabusComponent {

    @ViewChild('pdfTable', {static: false}) el!: ElementRef
  
    public downloadAsPDF() {
       let pdf = new jsPDF('p', 'pt', 'a4');
       pdf.html(this.el.nativeElement, {
          callback: (pdf) =>{
              pdf.save("sample.pdf")
          }
       })
    }

}
