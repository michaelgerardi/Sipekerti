import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PertemuanService } from '../_services/pertemuan.service';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';
import { HttpClient } from '@angular/common/http';
import { KelasService } from '../_services/kelas.service';

@Component({
  selector: 'app-dialog-add-meeting',
  templateUrl: './dialog-add-meeting.component.html',
  styleUrls: ['./dialog-add-meeting.component.scss']
})
export class DialogAddMeetingComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private pertemuanService : PertemuanService,
    private userService: UserService,
    private kelasService: KelasService
  ) { 
    this.listPengajar(),
    this.listKelas()
  }

  daftarPengajar: any ;
  daftarKelas: any;
  selectPengajar :any;
  selectKelas: any

  ChangePengajar(e: any){
    console.log(e.target.value);
    this.selectPengajar = e.target.value;
  }

  ChangeKelas(e: any){
    console.log(e.target.value);
    this.selectKelas = e.target.value;
  }

  selectedFile: File| any= null;

  onFileSelected(event:any){
   this.selectedFile= <File>event.target.files[0];
  }

  ngOnInit(): void {
  }

  pertemuanForm = this.fb.group({
    id:[''],
    id_kelas:['', Validators.required],
    id_pengajar:['', Validators.required],
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
    bobot:['', Validators.required]
    //upload_image:['', Validators.required]
  })

  createPertemuan(){
    console.log(this.pertemuanForm.value);
    const form = this.pertemuanForm.value;
    form.upload_image = this.selectedFile;

    const data = new FormData()
    for (let key in form) {
        data.append(key, form[key])
    }

    this.pertemuanService.insert(data).subscribe(val=>{ 
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
    })
    })
  }

  listPengajar(){
    this.userService.pengajar().then(val => {
        this.daftarPengajar = val
        console.log(val);
    })
  }

  listKelas(){
    this.kelasService.getAll().then(val => {
        this.daftarKelas = val
        console.log(val);
    })
  }
}