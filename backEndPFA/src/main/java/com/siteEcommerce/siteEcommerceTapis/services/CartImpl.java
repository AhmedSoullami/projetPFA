package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Cart;
import com.siteEcommerce.siteEcommerceTapis.entities.Tapis;
import com.siteEcommerce.siteEcommerceTapis.entities.User;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoCart;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoTapis;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartImpl implements CartService {

    @Autowired
    private RepoCart repoCart;

    @Autowired
    private RepoUser repoUser;

    @Autowired
    private RepoTapis repoTapis;

    @Override
    public void AddCart(Long idUser, Long idTapis) {
        // Retrieve the user and tapis from the database
        User user = repoUser.findById(idUser).orElse(null);
        Tapis tapis = repoTapis.findById(idTapis).orElse(null);

        if (user != null && tapis != null) {
            // Check if the user already has a cart
            Cart userCart = repoCart.findByUser(user);

            if (userCart == null) {
                // If the user doesn't have a cart, create a new one
                userCart = new Cart();
                userCart.setUser(user);
                userCart.setTapisList(List.of(tapis));
            } else {
                // If the user already has a cart, add the tapis to the existing cart
                userCart.getTapisList().add(tapis);
            }

            // Save the cart to the database
            repoCart.save(userCart);
        }
    }

    @Override
    public Optional<Cart> getUserCartById(Long userId) {
        return repoCart.findByUserId(userId);
    }

    @Override
    public boolean removeTapisFromCart(Long userId, Long tapisId) {
        Optional<Cart> optionalCart = repoCart.findByUserId(userId);

        if (optionalCart.isPresent()) {
            Cart cart = optionalCart.get();
            // Assuming Tapis has an ID field
            Tapis tapisToRemove = new Tapis();
            tapisToRemove.setId(tapisId);

            // Remove the specified Tapis from the cart
            cart.getTapisList().remove(tapisToRemove);

            // Save the updated cart to the repository
            repoCart.save(cart);

            return true;
        } else {
            // User's cart not found
            return false;
        }
    }


}

