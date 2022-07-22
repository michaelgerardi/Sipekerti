import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dialog-restore-dosen',
  templateUrl: './dialog-restore-dosen.component.html',
  styleUrls: ['./dialog-restore-dosen.component.scss']
})
export class DialogRestoreDosenComponent implements OnInit {

    dosenList: any =[];
  
    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
      this.dosen()
    }
  
    public dosen(){
      this.userService.history().then(val => {
          this.dosenList = val
      })
    }

    public restore(id: number){
        this.userService.restore(id).then(val => {
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
