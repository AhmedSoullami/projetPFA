package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Role;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleImpl implements ServiceRole{
    @Autowired
    private RepoRole repoRole;
    @Override
    public Role createRole(Role role) {
        return repoRole.save(role);
    }
}
