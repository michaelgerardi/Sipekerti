import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { KelasService } from '../_services/kelas.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-update-class',
  templateUrl: './dialog-update-class.component.html',
  styleUrls: ['./dialog-update-class.component.scss']
})
export class DialogUpdateClassComponent implements OnInit {
  kelasList: any = [];

  constructor(
    private fb: FormBuilder,
    private kelasService: KelasService,
    @Inject(MAT_DIALOG_DATA) public datacross: any
  ) { }

  editForm = this.fb.group({
    id: [''],
    kode_kelas: ['', Validators.required],
    nama_kelas: ['', Validators.required],
    tanggal_mulai: ['', Validators.required],
    tanggal_selesai: ['', Validators.required],
    deskripsi: ['', Validators.required],
    tahun: ['', Validators.required]
  })
  
  ngOnInit(): void {
    this.datacross;
    console.log(this.datacross);
    
    this.editForm = this.fb.group({
      id: [this.datacross.id],
      kode_kelas: [this.datacross.kode_kelas, Validators.required],
      nama_kelas: [this.datacross.nama_kelas, Validators.required],
      tanggal_mulai: [this.datacross.tanggal_mulai, Validators.required],
      tanggal_selesai: [this.datacross.tanggal_selesai, Validators.required],
      deskripsi: [this.datacross.deskripsi, Validators.required],
      tahun: [this.datacross.tahun, Validators.required]
    })
  }

  updateKelas(){
    this.kelasService.update(this.datacross.id,this.editForm.value).subscribe( ( result ) => {
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }
}
