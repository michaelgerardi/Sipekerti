import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { KelasService } from '../_services/kelas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dialog-add-class',
  templateUrl: './dialog-add-class.component.html',
  styleUrls: ['./dialog-add-class.component.scss']
})
export class DialogAddClassComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private kelasService: KelasService
  ) { }

  ngOnInit(): void {
  }

  kelasForm = this.fb.group({
    id: [''],
    kode_kelas:['', Validators.required],
    nama_kelas: ['', Validators.required],
    tanggal_mulai: ['', Validators.required],
    tanggal_selesai: ['', Validators.required],
    deskripsi: ['', Validators.required],
    tahun: ['', Validators.required]
  })


  createKelas(){
    this.kelasService.insert(this.kelasForm.value).subscribe(val => {
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
      })
      // Swal.fire({
      //       icon: 'error',
      //       title: 'Coba Lagi!',
      //       showConfirmButton: false,
      //       timer: 2000
      // });
      console.log(val);
    })
  }
}
