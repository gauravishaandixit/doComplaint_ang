package com.doComplaint.admin;

import com.doComplaint.complaint.Complaint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @Autowired
    ComplaintTable complaintTable;

    @RequestMapping(value = "/logincheck", method = RequestMethod.POST)
    public String loginCheck(@RequestBody Admin admin) {
        Boolean isExist = adminService.doesAdminExists(admin);
        if (isExist)
          return "True";
        else
        {
          return "False";
        }
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String addAdmin(@RequestBody Admin admin) {
      if(!adminService.addAdmin(admin))
        return "Successfully Registered";
      else
        return "Admin or Mobile Number Already Present";
    }

    @RequestMapping("/uncomplaints")
    public List<ComplaintTable> getUnresolvedComplaints() {
        List<Complaint> complaints = adminService.findByStatus();;
        Collections.sort(complaints, (c1, c2) -> c2.getId().compareTo(c1.getId()));

        List<ComplaintTable> complaintTableList = complaintTable.changeStructure(complaints);

        return complaintTableList;
    }

  @RequestMapping(value = "/update", method = RequestMethod.POST)
  String updateStatus(@RequestBody Complaint complaint)
  {
    System.out.println("In Update");
    System.out.println(complaint.getId());
    String flag = adminService.updateStatus(complaint.getId());
    System.out.println(flag);
    return  flag;
  }


    @RequestMapping("/allcomplaints")
    List<ComplaintTable> findAll()
    {
        List<Complaint> complaints = adminService.findAll();

        Collections.sort(complaints, (c1, c2) -> c2.getId().compareTo(c1.getId()));

        List<ComplaintTable> complaintTableList = complaintTable.changeStructure(complaints);
        return complaintTableList;
    }
}
