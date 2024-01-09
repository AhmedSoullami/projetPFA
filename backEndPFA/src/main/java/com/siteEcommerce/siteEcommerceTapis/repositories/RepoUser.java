package com.siteEcommerce.siteEcommerceTapis.repositories;

import com.siteEcommerce.siteEcommerceTapis.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RepoUser extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);

    List<User> findByRoles_RoleName(String roleName);
}
