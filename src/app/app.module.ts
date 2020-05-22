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
@NgModule({
  declarations: [
    AppComponent,
    StLoginComponent,
    HomeComponent,
    StComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
