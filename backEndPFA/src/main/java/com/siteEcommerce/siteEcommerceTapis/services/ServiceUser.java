package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.User;

import java.util.List;

public interface ServiceUser {
    User registreUser(User user);
    List<User> listUsers(String roleName);

    void deleteUserById(Long userId);

    Long getUserCount();
}
