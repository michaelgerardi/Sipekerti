import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'; 
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { ClassComponent } from './class/class.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogAddClassComponent } from './dialog-add-class/dialog-add-class.component';
import { DialogChatMeetingsComponent } from './dialog-chat-meetings/dialog-chat-meetings.component';
import { DetailMeetingComponent } from './detail-meeting/detail-meeting.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { DocumentComponent } from './document/document.component';
import { DialogPostingComponent } from './dialog-posting/dialog-posting.component';
import { DialogAddMeetingComponent } from './dialog-add-meeting/dialog-add-meeting.component';
import { TasksPengajarComponent } from './tasks-pengajar/tasks-pengajar.component';
import { TasksPesertaComponent } from './tasks-peserta/tasks-peserta.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchivePengajarComponent } from './archive-pengajar/archive-pengajar.component';
import { ArchivePesertaComponent } from './archive-peserta/archive-peserta.component';
import { DialogAddMateriComponent } from './dialog-add-materi/dialog-add-materi.component';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';
import { DialogUpdateClassComponent } from './dialog-update-class/dialog-update-class.component';
import { DialogUpdateMateriComponent } from './dialog-update-materi/dialog-update-materi.component';
import { DialogUpdateMeetingComponent } from './dialog-update-meeting/dialog-update-meeting.component';
import { DialogProfileComponent } from './dialog-profile/dialog-profile.component';
import { DialogUpdateTugasComponent } from './dialog-update-tugas/dialog-update-tugas.component';
import { PrintSilabusComponent } from './print-silabus/print-silabus.component';
import { ListDosenComponent } from './list-dosen/list-dosen.component';
import { DialogAddPengajarComponent } from './dialog-add-pengajar/dialog-add-pengajar.component';
import { AnggotaKelasComponent } from './anggota-kelas/anggota-kelas.component';
import { DialogUpdatePostingComponent } from './dialog-update-posting/dialog-update-posting.component';
import { NilaiComponent } from './nilai/nilai.component';
import { DialogUploadComponent } from './dialog-upload/dialog-upload.component';
import { DialogRestoreDosenComponent } from './dialog-restore-dosen/dialog-restore-dosen.component';
import { DialogRestoreKelasComponent } from './dialog-restore-kelas/dialog-restore-kelas.component';
import { DialogRestorePertemuanComponent } from './dialog-restore-pertemuan/dialog-restore-pertemuan.component';
import { DialogAddNilaiComponent } from './dialog-add-nilai/dialog-add-nilai.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    ClassComponent,
    MeetingsComponent,
    DashboardComponent,
    DialogAddClassComponent,
    DialogChatMeetingsComponent,
    DetailMeetingComponent,
    LoginComponent,
    TasksComponent,
    DocumentComponent,
    DialogPostingComponent,
    DialogAddMeetingComponent,
    TasksPengajarComponent,
    TasksPesertaComponent,
    ArchiveComponent,
    ArchivePengajarComponent,
    ArchivePesertaComponent,
    DialogAddMateriComponent,
    DialogAddTaskComponent,
    DialogUpdateClassComponent,
    DialogUpdateMateriComponent,
    DialogUpdateMeetingComponent,
    DialogProfileComponent,
    DialogUpdateTugasComponent,
    PrintSilabusComponent,
    ListDosenComponent,
    DialogAddPengajarComponent,
    AnggotaKelasComponent,
    DialogUpdatePostingComponent,
    NilaiComponent,
    DialogUploadComponent,
    DialogRestoreDosenComponent,
    DialogRestoreKelasComponent,
    DialogRestorePertemuanComponent,
    DialogAddNilaiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatTableModule,
    MatFileUploadModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
