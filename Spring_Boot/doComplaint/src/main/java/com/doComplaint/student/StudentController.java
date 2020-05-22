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

    @RequestMapping(value = "/yourcomplaints/{username}", method = RequestMethod.GET)
    public List<StudentComplaintTable> getAllComplaints(@PathVariable String username)
    {
        System.out.println("your:: "+username);
        Student student = studentService.findStudentByUsername(username);

        System.out.println("your::: "+student.getUsername());
        List<Complaint> complaints = new ArrayList<>(student.getComplaints());
        Collections.sort(complaints, (c1, c2) -> c2.getTimestamp().compareTo(c1.getTimestamp()));

        List<StudentComplaintTable> studentComplaintTableList = new StudentComplaintTable().changeStructure(complaints);
        return studentComplaintTableList;
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    String updateStatus(@RequestBody String id)
    {
        System.out.println(id);
        String flag = studentService.updateStatus(Long.parseLong(id));
        return  flag;
    }
}