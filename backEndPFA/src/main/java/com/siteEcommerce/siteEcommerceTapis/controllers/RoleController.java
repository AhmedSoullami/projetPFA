package com.siteEcommerce.siteEcommerceTapis.controllers;

import com.siteEcommerce.siteEcommerceTapis.entities.Role;
import com.siteEcommerce.siteEcommerceTapis.services.RoleImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoleController {
    @Autowired
    private RoleImpl roleImpl;
    @PostMapping("/addRole")
    public Role createRole(@RequestBody  Role role){
        return roleImpl.createRole(role);
    }
}
