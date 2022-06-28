import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivePengajarComponent } from './archive-pengajar/archive-pengajar.component';
import { ArchivePesertaComponent } from './archive-peserta/archive-peserta.component';
import { ArchiveComponent } from './archive/archive.component';
import { ClassComponent } from './class/class.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailMeetingComponent } from './detail-meeting/detail-meeting.component';
import { LoginComponent } from './login/login.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { TasksPengajarComponent } from './tasks-pengajar/tasks-pengajar.component';
import { TasksPesertaComponent } from './tasks-peserta/tasks-peserta.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'class', component: ClassComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'files', component: ArchiveComponent},
  {path: 'list-meeting/:id', component: MeetingsComponent},
  {path: 'detail-meeting/:id', component: DetailMeetingComponent},
  {path: 'login', component: LoginComponent},

  {path: 'tasks-teacher', component: TasksPengajarComponent},
  {path: 'files-teacher', component: ArchivePengajarComponent},

  {path: 'tasks-member', component: TasksPesertaComponent},
  {path: 'files-member', component: ArchivePesertaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
