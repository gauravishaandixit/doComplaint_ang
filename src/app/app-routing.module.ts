import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StLoginComponent } from './components/student/st-login/st-login.component';
import { HomeComponent } from './components/home/home.component';
import { StComplaintsComponent } from './components/student/st-complaints/st-complaints.component';
import { StRegisterComponent } from './components/student/st-register/st-register.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"stlogin",component:StLoginComponent},
  {path:"stcomplaints",component:StComplaintsComponent},
  {path:"stregister",component:StRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
