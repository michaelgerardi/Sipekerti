import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.scss']
})
export class RegistrasiComponent implements OnInit {

    angForm : FormGroup;
    constructor( 
      private fb: FormBuilder,
      private dataService : UserService,
      private router: Router
    ) { 
      this.angForm = this.fb.group({
        // id: [''],
        email: ['',Validators.required],
        password: ['',Validators.required],
      });
    
      }
  
    ngOnInit(): void {
    }
  
    postdata(angForm:any){
      this.dataService.userregistration(
        angForm.value.email,
        angForm.value.password,
      )
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['login']);
      },
      error =>{
  
      })
    }  

}
