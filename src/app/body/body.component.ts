import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthService
  ) { }
  
  ngOnInit(){
    this.authService.username.subscribe(data =>{
     this.username = data   
    })
  }

  username:string | null  =  null;
  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

  public logout(){
    this.authService.username.next(null);

    this.cookieService.delete('Level');
    this.cookieService.delete('username');
    this.cookieService.delete('nama');
    this.cookieService.delete('email');
    this.cookieService.delete('no_hp');
    this.cookieService.delete('nik');
    const cek =  this.cookieService.get('Level');
    console.log(cek);
    this.router.navigate(['/login'])
  }

  public update(){
    const dialogRef = this.dialog.open(DialogProfileComponent);
    dialogRef.afterClosed().subscribe(()=>{
      // this.readMeeting(this.y);
    })
  }
}
