import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService,
    private authService : AuthService
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
    nik: ['', Validators.required],
    no_hp: ['', Validators.required],
    nama:['', Validators.required],
    username: ['', Validators.required],
    email:['', Validators.required],
    password: ['', Validators.required]
  })

  login(){
    //this.reloadCurrentPage();
    this.userService.login(this.loginForm.value).subscribe(val => {
      
    //   Swal.fire({
    //        icon: 'error',
    //        title: 'Login Gagal! ',
    //        showConfirmButton: false,
    //        timer: 2000
    //   });
    //var newData = JSON.stringify(val);

    var parsed = JSON.parse(JSON.stringify(val));
    this.authService.username.next(parsed.username);
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