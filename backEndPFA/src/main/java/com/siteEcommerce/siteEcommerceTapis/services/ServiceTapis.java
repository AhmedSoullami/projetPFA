package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Tapis;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ServiceTapis {
     Tapis addTapis(Tapis tapis);
     List<Tapis>getAll();
     void deleteTapis(Long id);
     Tapis getTapis(Long id);
}
