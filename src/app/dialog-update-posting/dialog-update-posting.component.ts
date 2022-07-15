import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { PostingService } from '../_services/posting.service';

@Component({
  selector: 'app-dialog-update-posting',
  templateUrl: './dialog-update-posting.component.html',
  styleUrls: ['./dialog-update-posting.component.scss']
})
export class DialogUpdatePostingComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private postingService: PostingService,
        @Inject(MAT_DIALOG_DATA) public datacross: any
      ) { }
    
      editForm = this.fb.group({
        id: [''],
        catatan: ['', Validators.required],
        id_pertemuan: [''],
        id_peserta: [''],
        komentar: ['']
      })
    
      ngOnInit(): void {
        this.datacross;
        console.log(this.datacross);
    
        this.editForm = this.fb.group({
            id: [this.datacross.id],
            catatan: [this.datacross.catatan, Validators.required],
            id_pertemuan: [this.datacross.id_pertemuan, Validators.required],
            id_peserta: [this.datacross.id_peserta, Validators.required],
            komentar: [this.datacross.komentar]
        })
      }
    
      edit(){
        this.postingService.update(this.datacross.id,this.editForm.value).subscribe( ( result ) => {
          Swal.fire({
            icon: 'success',
            title: 'Data tersimpan!',
            showConfirmButton: false,
            timer: 2000
          })
        })
      }
}
