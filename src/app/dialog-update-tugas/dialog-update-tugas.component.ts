import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TugasService } from '../_services/tugas.service';

@Component({
  selector: 'app-dialog-update-tugas',
  templateUrl: './dialog-update-tugas.component.html',
  styleUrls: ['./dialog-update-tugas.component.scss']
})
export class DialogUpdateTugasComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private tugasService: TugasService,
        @Inject(MAT_DIALOG_DATA) public datacross: any
      ) { }
    
      editForm = this.fb.group({
        id: [''],
        id_pertemuan: ['', Validators.required], 
        judul: ['', Validators.required],
        tanggal_selesai: ['', Validators.required],
        dokumen: ['', Validators.required]
      })

  ngOnInit(): void {
    this.datacross;
    console.log(this.datacross);

    this.editForm = this.fb.group({
      id: [this.datacross.id],
      id_pertemuan: [this.datacross.id_pertemuan, Validators.required], 
      judul: [this.datacross.judul, Validators.required],
      tanggal_selesai: [this.datacross.tanggal_selesai, Validators.required],
      dokumen: [this.datacross.dokumen, Validators.required]
    })
  }

  update(){
    this.tugasService.update(this.datacross.id,this.editForm.value).subscribe( ( result ) => {
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }

}
