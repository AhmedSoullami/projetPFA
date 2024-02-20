package com.siteEcommerce.siteEcommerceTapis.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data @NoArgsConstructor @AllArgsConstructor @Entity
public class Tapis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String description;
    private Double price;
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name = "tapis_images",
    joinColumns ={
            @JoinColumn(name = "tapis_id")

    },inverseJoinColumns = {
            @JoinColumn(name = "image_id")
    }


    )
    private Set<ImageModel>imageModels;
    private User user;
    @ManyToOne
    @JoinColumn(name = "cart_id")  // This should match the column name in the Tapis table
    private Cart cart;

}
