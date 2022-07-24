import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostingService } from '../_services/posting.service';
import Swal from 'sweetalert2';
import { PertemuanService } from '../_services/pertemuan.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dialog-posting',
  templateUrl: './dialog-posting.component.html',
  styleUrls: ['./dialog-posting.component.scss']
})
export class DialogPostingComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private postingService: PostingService,
    private pertemuanService : PertemuanService,
    private cookieService: CookieService,
    private userService: UserService
    ) { 
      this.listPertemuan(),
      this.listPengajar()
    }
  
    daftarPertemuan: any;
    daftarPengajar: any ;
    selectPertemuan: any;
    selectPengajar :any;
  
    ChangePertemuan(e: any){
      console.log(e.target.value);
      this.selectPertemuan = e.target.value;
    }

    ChangePengajar(e: any){
        console.log(e.target.value);
        this.selectPengajar = e.target.value;
      }

    listPertemuan(){
      this.pertemuanService.getAll().then(val => {
          this.daftarPertemuan = val
          console.log(val);
          
      })
    }

  ngOnInit(): void {
  }

  username  =  this.cookieService.get('username');
  postingan: any =[];

  postingForm = this.fb.group({
    id: [''],
    catatan: ['', Validators.required],
    id_pertemuan: ['', Validators.required],
    id_pengajar: ['', Validators.required]
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

  listPengajar(){
    this.userService.pengajar().then(val => {
        this.daftarPengajar = val
        console.log(val);
    })
  }
}
