package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Tapis;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoTapis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TapisImpl implements ServiceTapis{
    @Autowired
    private RepoTapis repoTapis;

    @Override
    public Tapis addTapis(Tapis tapis) {
        return repoTapis.save(tapis);
    }

    @Override
    public List<Tapis> getAll() {
        return  repoTapis.findAll();
    }

    @Override
    public void deleteTapis(Long id) {
        repoTapis.deleteById(id);
    }

    @Override
    public Tapis getTapis(Long id) {
        return repoTapis.findById(id).get();
    }

    @Override
    public List<Tapis> getTapisByType(String type) {
        return repoTapis.findByType(type);
    }

    @Override
    public Long getTapisCount() {
        return repoTapis.count();
    }

    public Map<String, Long> getTapisTypeCounts() {
        List<Object[]> typeCounts = repoTapis.getTapisTypeCounts();
        Map<String, Long> typeCountsMap = new HashMap<>();

        for (Object[] result : typeCounts) {
            String type = (String) result[0];
            Long count = (Long) result[1];
            typeCountsMap.put(type, count);
        }

        return typeCountsMap;
    }

}
