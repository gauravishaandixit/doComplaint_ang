import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../Complaint';
import { StudentComplaint } from '../StudentComplaint';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-st-complaints',
  templateUrl: './st-complaints.component.html',
  styleUrls: ['./st-complaints.component.css']
})
export class StComplaintsComponent implements OnInit {

  complaints: any;
  newComplaint: StudentComplaint = new StudentComplaint("","");
  username:String;
  status:String = "";

  constructor(private studentService: StudentService) {
    this.username = sessionStorage.getItem("username");
  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("username");
    this.studentService.getComplaints(sessionStorage.getItem("username").toString())
    .subscribe((data)=> this.complaints = data);
  }
  addComplaint()
  {
    this.newComplaint.name = sessionStorage.getItem("username");
    this.studentService.addComplaint(this.newComplaint)
    .subscribe((data) => this.status = data.toString());
  }

  updateComplaint(id:number)
  {
    this.studentService.updateComplaint(id);
  }
}
