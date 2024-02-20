package com.siteEcommerce.siteEcommerceTapis.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor @AllArgsConstructor
public class DtoCart {
    private Long userId;
    private Long tapisId;
}
