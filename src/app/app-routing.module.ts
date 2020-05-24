import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StLoginComponent } from './components/student/st-login/st-login.component';
import { HomeComponent } from './components/home/home.component';
import { StComplaintsComponent } from './components/student/st-complaints/st-complaints.component';
import { StRegisterComponent } from './components/student/st-register/st-register.component';
import { AdLoginComponent } from './components/admin/ad-login/ad-login.component';
import { AdComplaintsComponent } from './components/admin/ad-complaints/ad-complaints.component';
import { AdRegisterComponent } from './components/admin/ad-register/ad-register.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"stlogin",component:StLoginComponent},
  {path:"stcomplaints",component:StComplaintsComponent},
  {path:"stregister",component:StRegisterComponent},
  {path:"adlogin",component:AdLoginComponent},
  {path:"adcomplaints",component:AdComplaintsComponent},
  {path:"adregister",component:AdRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
