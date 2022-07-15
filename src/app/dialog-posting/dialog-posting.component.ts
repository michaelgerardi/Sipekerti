import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostingService } from '../_services/posting.service';
import Swal from 'sweetalert2';
import { PertemuanService } from '../_services/pertemuan.service';

@Component({
  selector: 'app-dialog-posting',
  templateUrl: './dialog-posting.component.html',
  styleUrls: ['./dialog-posting.component.scss']
})
export class DialogPostingComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private postingService: PostingService,
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

  postingan: any =[];

  postingForm = this.fb.group({
    id: [''],
    catatan: ['', Validators.required],
    id_pertemuan: [''],
    id_peserta: [''],
    komentar: ['']
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
