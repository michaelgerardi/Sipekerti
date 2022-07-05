import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  userForm = this.fb.group({
    id: [''],
    username: ['', Validators.required],
    email:['', Validators.required],
    password: ['', Validators.required]
  })


  login(){
    this.userService.login(this.userForm.value).subscribe(val => {
      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil!',
        showConfirmButton: false,
        timer: 1000
      })
       Swal.fire({
            icon: 'error',
            title: 'Login Gagal! ',
            showConfirmButton: false,
            timer: 2000
       });
      console.log(val);
    })
    this.router.navigate(['/dashboard']);
  }

  registrasi(){
    this.userService.registrasi(this.userForm.value).subscribe(val => {
        Swal.fire({
            icon: 'success',
            title: 'Registrasi Berhasil!',
            showConfirmButton: false,
            timer: 2000
          })
    })
  }
}