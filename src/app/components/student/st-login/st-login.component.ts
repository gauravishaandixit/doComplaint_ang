import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-st-login',
  templateUrl: './st-login.component.html',
  styleUrls: ['./st-login.component.css']
})
export class StLoginComponent implements OnInit {

  student: Student = new Student("","","","","");
  status:String;
  
  message:String;

  constructor(
    private studentService: StudentService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  Login()
  {
    let response = this.studentService.login(this.student);
    response.subscribe((data)=>this.status = data.toString());
    console.log(status);
    if(this.status == "TRUE")
    {
      sessionStorage.setItem("username", this.student.username.toString());
      this.router.navigate(['stcomplaints'])
    }
    else
    {
      this.message = "User Does Not Exist or Username/Password Is Wrong!!!";
      //this.router.navigate(['stlogin']);
    }
  }
}
