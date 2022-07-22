import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TugasService } from '../_services/tugas.service';

@Component({
  selector: 'app-dialog-upload',
  templateUrl: './dialog-upload.component.html',
  styleUrls: ['./dialog-upload.component.scss']
})
export class DialogUploadComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private tugasService: TugasService,
    @Inject(MAT_DIALOG_DATA) public datacross: any
  ) { }

  ngOnInit(): void {
    this.datacross;
    console.log(this.datacross);

    this.editForm = this.fb.group({
      id: [this.datacross.id],
      dokumen: [this.datacross.dokumen, Validators.required]
    })
  }

  selectedFile: File| any= null;

  onFileSelected(event:any){
   this.selectedFile= <File>event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.http.post('http://localhost:8080/assets/uploads',fd)
    .subscribe(res =>{
      console.log(res);
    });
  }

//  onFileChange(event) {
  
//    if (event.target.files.length > 0) {
//      const file = event.target.files[0];
//      this.myForm.patchValue({
//        fileSource: file
//      });
//    }
//  }

  editForm = this.fb.group({
    id: [''],
    dokumen: ['', Validators.required]
    })

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
