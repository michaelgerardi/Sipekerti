import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-anggota-kelas',
  templateUrl: './anggota-kelas.component.html',
  styleUrls: ['./anggota-kelas.component.scss']
})
export class AnggotaKelasComponent implements OnInit {

    constructor(
        private userService: UserService
      ) { }
    
      pengajarList: any =[];
      pesertaList: any = [];
    
      ngOnInit(): void {
        this.pengajar(),
        this.peserta()
      }
    
      public pengajar(){
        this.userService.pengajar().then(val => {
            this.pengajarList = val
        })
      }
    
      public peserta(){
        this.userService.peserta().then(val => {
            this.pesertaList = val
            console.log(val);
        })
      }

}
