import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MateriService } from '../_services/materi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-update-materi',
  templateUrl: './dialog-update-materi.component.html',
  styleUrls: ['./dialog-update-materi.component.scss']
})
export class DialogUpdateMateriComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private materiService: MateriService,
    @Inject(MAT_DIALOG_DATA) public datacross: any
  ) { }

  editForm = this.fb.group({
    id: [''],
    judul: ['', Validators.required],
    dokumen: ['', Validators.required]
  })

  ngOnInit(): void {
    this.datacross;
    console.log(this.datacross);

    this.editForm = this.fb.group({
      id: [this.datacross.id],
      judul: [this.datacross.judul, Validators.required],
      dokumen: [this.datacross.dokumen, Validators.required]
    })
  }

  updateMateri(){
    this.materiService.update(this.datacross.id,this.editForm.value).subscribe( ( result ) => {
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }
}