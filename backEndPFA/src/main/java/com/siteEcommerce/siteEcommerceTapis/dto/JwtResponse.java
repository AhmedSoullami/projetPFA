package com.siteEcommerce.siteEcommerceTapis.dto;

import com.siteEcommerce.siteEcommerceTapis.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor @AllArgsConstructor
@Component
public class JwtResponse {
    private String email;
    private String accessToken;
}
