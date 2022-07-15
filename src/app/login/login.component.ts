import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    //this.login()
  }

  loginForm = this.fb.group({
    id: [''],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  regisForm = this.fb.group({
    id: [''],
    nama:['', Validators.required],
    username: ['', Validators.required],
    email:['', Validators.required],
    password: ['', Validators.required]
  })

  login(){
  
    this.userService.login(this.loginForm.value).subscribe(val => {
      
    //   Swal.fire({
    //        icon: 'error',
    //        title: 'Login Gagal! ',
    //        showConfirmButton: false,
    //        timer: 2000
    //   });
    //var newData = JSON.stringify(val);

    //this.cookieService.delete('Level');
    //this.cookieService.delete( 'username' );
    //this.cookieService.delete( 'nama');
    //this.cookieService.delete( 'email');
    //this.cookieService.delete( 'no_hp');
    //this.cookieService.delete( 'nik' );
    var parsed = JSON.parse(JSON.stringify(val));
 
    this.cookieService.set( 'Level', parsed.level );
    this.cookieService.set( 'username', parsed.username );
    this.cookieService.set( 'nama', parsed.nama );
    this.cookieService.set( 'email', parsed.email );
    this.cookieService.set( 'no_hp', parsed.no_hp );
    this.cookieService.set( 'nik', parsed.nik );
    //console.log(parsed.level);
    })
  
    var cek =  this.cookieService.get('Level');
    if(cek == "1")
    {
        this.router.navigate(['/dashboard']);
        //this.reloadCurrentPage()
        //console.log('admin');
    }
    else{
        this.router.navigate(['/class'])
        //.then(() => {
        //    window.location.reload();
        //  });
        //console.log('user');
    }
    Swal.fire({
        icon: 'success',
        title: 'Login Berhasil!',
        showConfirmButton: false,
        timer: 1000
    })
   // this.router.navigate(['/dashboard']);
  }

  registrasi(){
    this.userService.registrasi(this.regisForm.value).subscribe(val => {
        Swal.fire({
            icon: 'success',
            title: 'Registrasi Berhasil!',
            showConfirmButton: false,
            timer: 2000
          })
    })
  }

   reloadCurrentPage() {
    window.location.reload();
   }
}