package com.siteEcommerce.siteEcommerceTapis.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;


@Data @NoArgsConstructor @AllArgsConstructor
@Entity
public class Role {
    @Id
    private String roleName;
    private String roleDescription;
}
