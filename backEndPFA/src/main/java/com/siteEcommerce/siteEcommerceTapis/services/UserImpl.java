package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Role;
import com.siteEcommerce.siteEcommerceTapis.entities.User;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoRole;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserImpl implements ServiceUser{
    @Autowired
    private RepoUser repoUser;
    @Autowired
    private RepoRole repoRole;
    @Override
    public User registreUser(User user) {
        return repoUser.save(user);
    }

    @Override
    public List<User> listUsers(String roleName) {
       return repoUser.findByRoles_RoleName(roleName);
    }




}
