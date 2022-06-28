import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PertemuanService } from '../_services/pertemuan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-add-meeting',
  templateUrl: './dialog-add-meeting.component.html',
  styleUrls: ['./dialog-add-meeting.component.scss']
})
export class DialogAddMeetingComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private pertemuanService : PertemuanService
  ) { }

  ngOnInit(): void {
  }

  pertemuanForm = this.fb.group({
    id:[''],
    id_kelas:['', Validators.required],
    nama_pertemuan:['', Validators.required],
    tanggal_pertemuan:['', Validators.required],
    deskripsi_pertemuan:['', Validators.required],
    tempat:['', Validators.required],
    sub_cp:['', Validators.required],
    materi:['', Validators.required],
    indikator:['', Validators.required],
    metode_penilaian:['', Validators.required],
    metode_pembelajaran:['', Validators.required],
    pustaka:['', Validators.required],
    bobot:['', Validators.required],
    upload_image:['', Validators.required],
  })

  createPertemuan(){
    
    this.pertemuanService.insert(this.pertemuanForm.value).subscribe(val=>{
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
    })
    })
  }

  // file: File = null;

//  onFilechange(event: any) {
//    console.log(event.target.files[0])
//    this.file = event.target.files[0]
//  }
  
//  upload() {
//    if (this.file) {
//      this.pertemuanService.uploadfile(this.file).subscribe(resp => {
//        alert("Uploaded")
//      })
//    } else {
//      alert("Please select a file first")
//    }
//  }
}