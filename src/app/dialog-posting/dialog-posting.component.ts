import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostingService } from '../_services/posting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-posting',
  templateUrl: './dialog-posting.component.html',
  styleUrls: ['./dialog-posting.component.scss']
})
export class DialogPostingComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private postingService: PostingService
  ) { }

  ngOnInit(): void {
  }

  postingan: any =[];

  postingForm = this.fb.group({
    id: [''],
    judul: ['', Validators.required],
    pesan: ['', Validators.required],
    id_pertemuan: ['']
  })

  create(){
    this.postingService.insert(this.postingForm.value).subscribe(val=>{
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }
}
