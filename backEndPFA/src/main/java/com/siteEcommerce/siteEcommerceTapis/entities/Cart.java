package com.siteEcommerce.siteEcommerceTapis.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor

public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", unique = true)
    private User user;

    @ManyToMany
    @JoinTable(
            name = "cart_tapis",
            joinColumns = @JoinColumn(name = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "tapis_id"))
    private List<Tapis> tapisList = new ArrayList<>();

}
