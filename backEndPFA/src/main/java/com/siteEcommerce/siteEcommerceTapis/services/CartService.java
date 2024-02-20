package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Cart;

import java.util.Optional;

public interface CartService {
    public void AddCart(Long idUser, Long idTapis);

    Optional<Cart> getUserCartById(Long userId);

    boolean removeTapisFromCart(Long userId, Long tapisId);
}
