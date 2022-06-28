import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TugasService } from '../_services/tugas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private tugasService: TugasService
  ) { }

  ngOnInit(): void {
  }

  tugasForm = this.fb.group({
    id: [''],
    id_pertemuan: ['', Validators.required], 
    judul: ['', Validators.required],
    tanggal_selesai: ['', Validators.required],
    dokumen: ['', Validators.required],
    nilai: [''],
  })

  create(){
    this.tugasService.insert(this.tugasForm.value).subscribe(val => {
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
      // console.log(val);
    })
  }
}
