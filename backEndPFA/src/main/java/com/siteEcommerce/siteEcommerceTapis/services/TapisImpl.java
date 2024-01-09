package com.siteEcommerce.siteEcommerceTapis.services;

import com.siteEcommerce.siteEcommerceTapis.entities.Tapis;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoTapis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

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
}
