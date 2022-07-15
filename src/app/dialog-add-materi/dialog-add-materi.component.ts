import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MateriService } from '../_services/materi.service';
import Swal from 'sweetalert2';
import { PertemuanService } from '../_services/pertemuan.service';

@Component({
  selector: 'app-dialog-add-materi',
  templateUrl: './dialog-add-materi.component.html',
  styleUrls: ['./dialog-add-materi.component.scss']
})
export class DialogAddMateriComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private materiService: MateriService,
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

  materiForm = this.fb.group({
    id: [''],
    judul: ['', Validators.required],
    dokumen: ['', Validators.required]
  })
    
  create(){
    this.materiService.insert(this.materiForm.value).subscribe(val => {
      Swal.fire({
        icon: 'success',
        title: 'Data tersimpan!',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }
}
