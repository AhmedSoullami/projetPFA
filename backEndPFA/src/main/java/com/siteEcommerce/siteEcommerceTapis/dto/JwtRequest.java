package com.siteEcommerce.siteEcommerceTapis.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor @NoArgsConstructor
@Component
public class JwtRequest {
    private String email;
    private String password;
}
