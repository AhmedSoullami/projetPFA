package com.siteEcommerce.siteEcommerceTapis.repositories;

import com.siteEcommerce.siteEcommerceTapis.entities.Cart;
import com.siteEcommerce.siteEcommerceTapis.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepoCart extends JpaRepository<Cart,Long> {
    Cart findByUser(User user);

    Optional<Cart> findByUserId(Long userId);

}
