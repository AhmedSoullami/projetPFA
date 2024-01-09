package com.siteEcommerce.siteEcommerceTapis.repositories;

import com.siteEcommerce.siteEcommerceTapis.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoRole extends JpaRepository<Role,String> {

    Role findByRoleName(String user);
}
