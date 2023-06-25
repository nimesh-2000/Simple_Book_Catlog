package lk.ijse.boot.controller;

import lk.ijse.boot.dto.AdminDTO;
import lk.ijse.boot.service.AdminService;
import lk.ijse.boot.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping(params = "email")
    public ResponseUtil checkAdmin(String email) {
        System.out.println(email);
        AdminDTO adminDTO = service.searchAdminByEmail(email);
        System.out.println(adminDTO);
        return new ResponseUtil("200", "Login Success", adminDTO);
    }

}
