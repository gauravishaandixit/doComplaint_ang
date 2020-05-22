import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../components/student/Student';
import { StudentComplaint } from '../components/student/StudentComplaint';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  login(student:Student)
  {
    return this.http.post("http://localhost:8090/student/logincheck",student,{responseType:'text' as 'json'});
  }

  getComplaints(username:String)
  {
    return this.http.get("http://localhost:8090/student/yourcomplaints/"+username);
  }
  addComplaint(newComplaint: StudentComplaint)
  {
    return this.http.post("http://localhost:8090/addComplaint",newComplaint,{responseType:'text' as 'json'});
  }
  updateComplaint(id:number)
  {
    return this.http.put("http://localhost:8090/student/update",id);
  }
}
