package com.siteEcommerce.siteEcommerceTapis.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "paiments")
public class Paiment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cardNumber;
    private String expirationDate;
    private String securityCode;
    private String cardName;

    private Double totalAmount;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
