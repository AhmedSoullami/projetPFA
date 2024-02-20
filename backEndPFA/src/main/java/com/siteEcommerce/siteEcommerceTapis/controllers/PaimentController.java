package com.siteEcommerce.siteEcommerceTapis.controllers;

import com.siteEcommerce.siteEcommerceTapis.entities.Paiment;
import com.siteEcommerce.siteEcommerceTapis.services.PaimentImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PaimentController {
    @Autowired
    PaimentImpl paiment;

    @PostMapping("/addPaiment")
    public void AddPaiment(@RequestBody Paiment paiment1) {
        paiment.AjouterPaiment(paiment1);
    }

    @GetMapping("/payments/{userId}")
    public ResponseEntity<List<Paiment>> getPaymentsByUserId(@PathVariable Long userId) {
        List<Paiment> userPayments = paiment.getPaymentsByUserId(userId);


         return ResponseEntity.ok(userPayments);
    }
}
