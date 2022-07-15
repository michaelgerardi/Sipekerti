import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';
import { CookieService } from 'ngx-cookie-service';

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
    private cookieService: CookieService
  ) { }
  
  username  =  this.cookieService.get( 'username' );
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
