package com.siteEcommerce.siteEcommerceTapis.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
 @Data
@AllArgsConstructor @NoArgsConstructor
public class TapisDto {
    private String type;
    private String description;
    private Double price;
}
