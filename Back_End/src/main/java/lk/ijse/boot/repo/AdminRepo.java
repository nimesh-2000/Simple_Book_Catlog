package lk.ijse.boot.repo;

import lk.ijse.boot.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
public interface AdminRepo extends JpaRepository<Admin,String> {

    Admin getAdminByEmail(String email);
}
