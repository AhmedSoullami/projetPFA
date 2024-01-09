package com.siteEcommerce.siteEcommerceTapis.configuration;

import com.siteEcommerce.siteEcommerceTapis.entities.User;
import io.jsonwebtoken.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenUtil {
    private static final long EXPIRE_DURATION = 120000L;


    private String SECRET_KEY="ahmedasmae";

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtTokenUtil.class);
    public String generateAccessToken(User user) {
        Date expiryDate = new Date(System.currentTimeMillis() + EXPIRE_DURATION);
        return Jwts.builder()
        .setSubject(Long.toString(user.getId()))
                .claim("email", user.getEmail())
                .claim("role", user.getRoles())
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public boolean validateAccessToken(String token) {
        try {
            Jwts.parser().setSigningKey(this.SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (ExpiredJwtException var3) {
            LOGGER.error("JWT expired", var3.getMessage());
        } catch (IllegalArgumentException var4) {
            LOGGER.error("Token is null, empty or only whitespace", var4.getMessage());
        } catch (MalformedJwtException var5) {
            LOGGER.error("JWT is invalid", var5);
        } catch (UnsupportedJwtException var6) {
            LOGGER.error("JWT is not supported", var6);
        } catch (SignatureException var7) {
            LOGGER.error("Signature validation failed");
        }

        return false;
    }

    public String getSubject(String token) {
        return this.parseClaims(token).getSubject();
    }

    private Claims parseClaims(String token) {
        return (Claims)Jwts.parser().setSigningKey(this.SECRET_KEY).parseClaimsJws(token).getBody();
    }
    public boolean isTokenExpired(String token) {
        try {
            Claims claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
            Date expirationDate = claims.getExpiration();
            return expirationDate.before(new Date());
        } catch (ExpiredJwtException ex) {
            return true;
        }
    }
}
