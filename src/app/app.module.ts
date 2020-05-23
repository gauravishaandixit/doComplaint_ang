import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StLoginComponent } from './components/student/st-login/st-login.component';
import { StudentService } from './services/student.service';

import { FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { StComplaintsComponent } from './components/student/st-complaints/st-complaints.component';
import { StRegisterComponent } from './components/student/st-register/st-register.component';
import { RouterModule } from '@angular/router';
import { AdLoginComponent } from './components/admin/ad-login/ad-login.component';
import { AdComplaintsComponent } from './components/admin/ad-complaints/ad-complaints.component';
import { AdRegisterComponent } from './components/admin/ad-register/ad-register.component';
import { AdminService } from './services/admin.service';
@NgModule({
  declarations: [
    AppComponent,
    StLoginComponent,
    HomeComponent,
    StComplaintsComponent,
    StRegisterComponent,
    AdLoginComponent,
    AdComplaintsComponent,
    AdRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [StudentService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
