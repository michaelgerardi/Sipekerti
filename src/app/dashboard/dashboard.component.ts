import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { KelasService } from '../_services/kelas.service';
import { PertemuanService } from '../_services/pertemuan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'barcharts';
  kelasList: any =[];
  pertemuanList: any =[];
  constructor(
    private router: Router,
    public kelasService: KelasService,
    public pertemuanService: PertemuanService,
  ) { }

  ngOnInit() {
    // const ctx = document.getElementById('myChart');
    this.readClass();
    this.readMeeting();
    const myChart = new Chart("myChart",
    {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      },
    });
  }

  public listDosen(){
    this.router.navigate(['/daftar-dosen'])
  }

  public readClass(){
    this.kelasService.getAll().then(val =>{
      this.kelasList=val
      console.log(val);
    })
  }

  public readMeeting(){
    this.pertemuanService.getAll().then(val =>{
      this.pertemuanList = val
       console.log(val);
     })
  }
}