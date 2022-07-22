import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PertemuanService } from '../_services/pertemuan.service';

@Component({
  selector: 'app-dialog-restore-pertemuan',
  templateUrl: './dialog-restore-pertemuan.component.html',
  styleUrls: ['./dialog-restore-pertemuan.component.scss']
})
export class DialogRestorePertemuanComponent implements OnInit {

    pertemuanList: any =[];
  
    constructor(
        private pertemuanService: PertemuanService
    ) { }

    ngOnInit(): void {
      this.pertemuan()
    }
  
    public pertemuan(){
      this.pertemuanService.history().then(val => {
          this.pertemuanList = val
      })
    }

    public restore(id: number){
        this.pertemuanService.restore(id).then(val => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Data dipulihkan!'
              })
        })

    }

}
