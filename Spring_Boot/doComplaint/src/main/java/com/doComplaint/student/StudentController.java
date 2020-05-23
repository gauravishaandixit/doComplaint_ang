package com.doComplaint.student;


import com.doComplaint.complaint.Complaint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/student")
@CrossOrigin("*")
//@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    @Autowired
    StudentService studentService;

    @RequestMapping(value = "/logincheck", method = RequestMethod.POST)
    String checkLogin(@RequestBody Student student)
    {
        boolean exists = studentService.doesStudentExists(student);
        System.out.println("Hello "+ exists);
        if(exists)
        {
            return "TRUE";
        }
        return "FALSE";
    }
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String addStudent(@RequestBody Student student)
    {
        Student student1 = studentService.findStudentByRollnumber(student.getRollnumber());
        if(student1 == null)
        {
            studentService.addStudent(student);
            return "Registration Successfull.";
        }
        return "User Already Exists!!!";
    }

    @RequestMapping(value = "/yourcomplaints/{rollnumber}", method = RequestMethod.GET)
    public List<StudentComplaintTable> getAllComplaints(@PathVariable String rollnumber)
    {
        System.out.println("you are:: "+rollnumber);
        Student student = studentService.findStudentByRollnumber(rollnumber);

        System.out.println("you are::: "+student.getUsername());
        List<Complaint> complaints = new ArrayList<>(student.getComplaints());
        Collections.sort(complaints, (c1, c2) -> c2.getId().compareTo(c1.getId()));

        List<StudentComplaintTable> studentComplaintTableList = new StudentComplaintTable().changeStructure(complaints);
        return studentComplaintTableList;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    String updateStatus(@RequestBody Complaint complaint)
    {
        System.out.println("In Update");
        System.out.println(complaint.getId());
        String flag = studentService.updateStatus(complaint.getId());
      System.out.println(flag);
        return  flag;
    }
}
