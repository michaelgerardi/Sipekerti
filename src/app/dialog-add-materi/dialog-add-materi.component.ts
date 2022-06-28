import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MateriService } from '../_services/materi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-add-materi',
  templateUrl: './dialog-add-materi.component.html',
  styleUrls: ['./dialog-add-materi.component.scss']
})
export class DialogAddMateriComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private materiService: MateriService
  ) { }

  ngOnInit(): void {
  }

  materiForm = this.fb.group({
    id: [''],
    judul: ['', Validators.required],
    dokumen: ['', Validators.required]
  })

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
    };
    
  create(){
    this.materiService.insert(this.materiForm.value).subscribe(val => {
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
