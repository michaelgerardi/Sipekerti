import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PertemuanService } from '../_services/pertemuan.service';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';
import { KelasService } from '../_services/kelas.service';

@Component({
  selector: 'app-dialog-update-meeting',
  templateUrl: './dialog-update-meeting.component.html',
  styleUrls: ['./dialog-update-meeting.component.scss']
})
export class DialogUpdateMeetingComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private pertemuanService: PertemuanService,
        private userService: UserService,
        private kelasService: KelasService,
        @Inject(MAT_DIALOG_DATA) public datacross: any
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

    editForm = this.fb.group({
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
        bobot:['', Validators.required],
        //upload_image:['', Validators.required]
    })

  ngOnInit(): void {
    this.datacross;
    console.log(this.datacross);
    
    this.editForm = this.fb.group({
    id:[this.datacross.id],
    id_kelas:[this.datacross.id_kelas, Validators.required],
    id_pengajar:[this.datacross.id_pengajar, Validators.required],
    nama_pertemuan:[this.datacross.nama_pertemuan, Validators.required],
    tanggal_pertemuan:[this.datacross.tanggal_pertemuan, Validators.required],
    deskripsi_pertemuan:[this.datacross.deskripsi_pertemuan, Validators.required],
    tempat:[this.datacross.tempat, Validators.required],
    sub_cp:[this.datacross.sub_cp, Validators.required],
    materi:[this.datacross.materi, Validators.required],
    indikator:[this.datacross.indikator, Validators.required],
    metode_penilaian:[this.datacross.metode_penilaian, Validators.required],
    metode_pembelajaran:[this.datacross.metode_pembelajaran, Validators.required],
    pustaka:[this.datacross.pustaka, Validators.required],
    bobot:[this.datacross.bobot, Validators.required],
    //upload_image:[this.datacross.upload_image, Validators.required]
    })
  }

  updatePertemuan(){
    console.log(this.editForm.value);
    const form = this.editForm.value;
    form.upload_image = this.selectedFile;

    const data = new FormData()
    for (let key in form) {
        data.append(key, form[key])
    }

    this.pertemuanService.update(this.datacross.id,this.editForm.value).subscribe( ( result ) => {
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
