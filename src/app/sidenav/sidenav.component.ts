import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { navbarData } from './nav-data';
import { CookieService } from 'ngx-cookie-service';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ]),
    ])
  ]
})
export class SidenavComponent implements OnInit {

  constructor(
    public cookieService: CookieService
  ) { }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  Level  =  this.cookieService.get( 'Level' );
 
  navbarData1 = [
   
    {
        routeLink: 'class',
       icon: 'fal fa-list-alt',
        label: 'Daftar Kelas'
    },
    //{
    //    routeLink: 'tasks',
    //    icon: 'fal fa-calendar-check',
    //    label: 'Daftar Nilai'
    //},
    {
        routeLink: 'files',
        icon: 'fal fa-archive',
        label: 'Dokumen'
    }
];

  navData = navbarData;
  screenWidth = 0;
  
  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
