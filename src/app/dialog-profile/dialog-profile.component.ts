import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.scss']
})
export class DialogProfileComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        @Inject(MAT_DIALOG_DATA) public datacross: any
      ) { }
    
      profilForm = this.fb.group({
        id: [''],
        nik: ['', Validators.required],
        nama: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        no_hp: ['', Validators.required]
      })

  ngOnInit(): void {
    this.datacross;
    console.log(this.datacross);

    this.profilForm = this.fb.group({
      id: [this.datacross.id],
      nik: [this.datacross.nik, Validators.required],
      nama: [this.datacross.nama, Validators.required],
      username: [this.datacross.username, Validators.required],
      email: [this.datacross.email, Validators.required],
      password: [this.datacross.password, Validators.required],
      no_hp: [this.datacross.no_hp, Validators.required]
    })
  }

  save(){
    this.userService.update(this.datacross.id,this.profilForm.value).subscribe( ( result ) => {
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }

}
