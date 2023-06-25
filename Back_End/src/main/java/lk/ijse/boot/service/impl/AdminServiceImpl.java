package lk.ijse.boot.service.impl;

import lk.ijse.boot.dto.AdminDTO;
import lk.ijse.boot.repo.AdminRepo;
import lk.ijse.boot.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public AdminDTO searchAdminByEmail(String email) {
        return mapper.map( repo.getAdminByEmail(email), AdminDTO.class);
    }
}
