import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { KelasService } from '../_services/kelas.service';

@Component({
  selector: 'app-dialog-restore-kelas',
  templateUrl: './dialog-restore-kelas.component.html',
  styleUrls: ['./dialog-restore-kelas.component.scss']
})
export class DialogRestoreKelasComponent implements OnInit {

    kelasList: any =[];
  
    constructor(
        private kelasService: KelasService
    ) { }

    ngOnInit(): void {
      this.kelas()
    }
  
    public kelas(){
      this.kelasService.history().then(val => {
          this.kelasList = val
      })
    }

    public restore(id: number){
        this.kelasService.restore(id).then(val => {
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
