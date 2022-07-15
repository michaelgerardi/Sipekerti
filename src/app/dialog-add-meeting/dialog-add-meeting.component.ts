import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private kelasService: KelasService,
    private http: HttpClient
  ) { 
    this.listPengajar(),
    this.listKelas()
  }

  daftarPengajar: any = [];
  daftarKelas: any = [];
  pengajarModel = "";
  kelasModel = "";
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
  ngOnInit(): void {
    //this.pengajarList;
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
    bobot:['', Validators.required],
    //upload_image:['', Validators.required],
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

//  fileData: File = null;
//  fileProgress(fileInput: any) {
//    this.fileData = <File>fileInput.target.files[0];
//}
 
//onSubmit() {
//    const formData = new FormData();
//    formData.append('file', this.fileData);
//    this.http.post('url/to/your/api', formData)
//      .subscribe(res => {
//        console.log(res);
//        alert('SUCCESS !!');
//      })
//}
//  selectedFile: File = null;

//  onFileSelected(event: any) {
//    //console.log(event)
//    this.selectedFile = <File>event.target.files[0]
//  }

//  onUpload(){
//    const fd = new FormData();
//    fd.append('image', this.selectedFile, this.selectedFile.name);
//    this.http.post( , fd, {
//        reportProgress: true,
//        observe: 'events'
//    }).subscribe(event => {
//        if (event.type === HttpEventType.UploadProgress){
//            console.log('Upload Progress: '+ Math.round(event.loaded / event.total*100) + '%');
            
//        } else if(event.type === HttpEventType.Response){
//            console.log(event);
//        }
        
//    })
//  }
}