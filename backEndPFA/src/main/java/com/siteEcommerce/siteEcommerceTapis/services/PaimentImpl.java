package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Paiment;
import com.siteEcommerce.siteEcommerceTapis.entities.User;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoPaiment;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class PaimentImpl implements PaimentService{
    @Autowired
    private RepoPaiment repoPaiment;
    @Autowired
    RepoUser userRepository;
    @Override

    public void AjouterPaiment(Paiment paiment) {
        User user = userRepository.findById(paiment.getUser().getId())
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + paiment.getUser().getId()));

        paiment.setUser(user);

        repoPaiment.save(paiment);
    }

    @Override
    public List<Paiment> getPaymentsByUserId(Long userId) {
        return repoPaiment.findByUserId(userId);
    }

}
