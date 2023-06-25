package lk.ijse.boot.service;

import lk.ijse.boot.dto.AdminDTO;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
public interface AdminService {
    public AdminDTO searchAdminByEmail(String email);
}
