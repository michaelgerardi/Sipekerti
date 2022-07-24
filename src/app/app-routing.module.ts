import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnggotaKelasComponent } from './anggota-kelas/anggota-kelas.component';
import { ArchiveComponent } from './archive/archive.component';
import { ClassComponent } from './class/class.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailMeetingComponent } from './detail-meeting/detail-meeting.component';
import { ListDosenComponent } from './list-dosen/list-dosen.component';
import { LoginComponent } from './login/login.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { NilaiComponent } from './nilai/nilai.component';
import { PrintSilabusComponent } from './print-silabus/print-silabus.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'class', component: ClassComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'files', component: ArchiveComponent},
  {path: 'list-meeting/:id', component: MeetingsComponent},
  {path: 'detail-meeting/:id', component: DetailMeetingComponent},
  {path: 'nilai-meeting/:id', component: NilaiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'download-silabus/:id', component: PrintSilabusComponent},
  {path: 'daftar-dosen', component: ListDosenComponent},
  {path: 'anggota-kelas', component: AnggotaKelasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
