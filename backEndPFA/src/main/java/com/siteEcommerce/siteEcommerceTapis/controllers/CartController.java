package com.siteEcommerce.siteEcommerceTapis.controllers;

import com.siteEcommerce.siteEcommerceTapis.dto.DtoCart;
import com.siteEcommerce.siteEcommerceTapis.entities.Cart;
import com.siteEcommerce.siteEcommerceTapis.services.CartImpl;
import com.siteEcommerce.siteEcommerceTapis.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
public class CartController {
    @Autowired
    CartImpl cartimpl;
    @PreAuthorize("hasRole('user')")
    @PostMapping("/addCart")
    public void addTapisToCart(@RequestBody DtoCart dtoCart
                               ) {
        cartimpl.AddCart(dtoCart.getUserId(), dtoCart.getTapisId());
    }
    @GetMapping("/getCart/{userId}")
    public ResponseEntity<Cart> getUserCart(@PathVariable Long userId) {
        Optional<Cart> userCart = cartimpl.getUserCartById(userId);

        return userCart.map(cart -> new ResponseEntity<>(cart, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PreAuthorize("hasRole('user')")
    @DeleteMapping("/removeTapis/{userId}/{tapisId}")
    public ResponseEntity<String> removeTapisFromCart(@PathVariable Long userId, @PathVariable Long tapisId) {
        boolean removed = cartimpl.removeTapisFromCart(userId, tapisId);

        if (removed) {
            return new ResponseEntity<>("{\"message\": \"Tapis removed from cart successfully\"}", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("{\"message\": \"Tapis not found in the cart\"}", HttpStatus.NOT_FOUND);
        }
    }

}
