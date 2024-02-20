package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Paiment;
import org.springframework.data.domain.PageImpl;

import java.util.List;

public interface PaimentService {
    void AjouterPaiment(Paiment paiment);

    List<Paiment> getPaymentsByUserId(Long userId);
}
