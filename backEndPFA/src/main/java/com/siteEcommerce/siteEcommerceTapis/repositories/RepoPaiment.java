package com.siteEcommerce.siteEcommerceTapis.repositories;

import com.siteEcommerce.siteEcommerceTapis.entities.Paiment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepoPaiment extends JpaRepository<Paiment,Long> {
    List<Paiment> findByUserId(Long userId);
}
