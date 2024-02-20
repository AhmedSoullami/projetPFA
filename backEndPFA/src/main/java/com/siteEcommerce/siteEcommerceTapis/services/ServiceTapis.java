package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Tapis;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface ServiceTapis {
     Tapis addTapis(Tapis tapis);
     List<Tapis>getAll();
     void deleteTapis(Long id);
     Tapis getTapis(Long id);
     List<Tapis> getTapisByType(String type);
     Long getTapisCount();
     public Map<String, Long> getTapisTypeCounts();
}
