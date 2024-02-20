package com.siteEcommerce.siteEcommerceTapis.repositories;

import com.siteEcommerce.siteEcommerceTapis.entities.Tapis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepoTapis extends JpaRepository<Tapis,Long> {
    List<Tapis> findByType(String type);

    @Query("SELECT t.type, COUNT(t) FROM Tapis t GROUP BY t.type ORDER BY COUNT(t) DESC")
    List<Object[]> getTapisTypeCounts();
}
