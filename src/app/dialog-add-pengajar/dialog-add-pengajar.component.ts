import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dialog-add-pengajar',
  templateUrl: './dialog-add-pengajar.component.html',
  styleUrls: ['./dialog-add-pengajar.component.scss']
})
export class DialogAddPengajarComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  pengajarForm = this.fb.group({
    id: [''],
    nik:['', Validators.required],
    nama:['', Validators.required],
    username: ['', Validators.required],
    email:['', Validators.required],
    password: ['', Validators.required]
  })

  registrasi(){
    this.userService.addPengajar(this.pengajarForm.value).subscribe(val => {
        Swal.fire({
            icon: 'success',
            title: 'Registrasi Berhasil!',
            showConfirmButton: false,
            timer: 2000
        })
    })
  }
}
