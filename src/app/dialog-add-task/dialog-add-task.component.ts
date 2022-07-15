import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TugasService } from '../_services/tugas.service';
import Swal from 'sweetalert2';
import { PertemuanService } from '../_services/pertemuan.service';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private tugasService: TugasService,
    private pertemuanService : PertemuanService
    ) { 
      this.listPertemuan()
    }
    daftarPertemuan: any = [];
    pertemuanModel = "";
    selectPertemuan: any;

    ChangePertemuan(e: any){
        console.log(e.target.value);
        this.selectPertemuan = e.target.value;
    }

    listPertemuan(){
        this.pertemuanService.getAll().then(val => {
            this.daftarPertemuan = val
            console.log(val);
            
        })
    }

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
