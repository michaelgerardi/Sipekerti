import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';

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
    private router: Router
  ) { }
  
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
    this.router.navigate(['/login'])
  }

  public update(){
    const dialogRef = this.dialog.open(DialogProfileComponent);
    dialogRef.afterClosed().subscribe(()=>{
      // this.readMeeting(this.y);
    })
  }
}
