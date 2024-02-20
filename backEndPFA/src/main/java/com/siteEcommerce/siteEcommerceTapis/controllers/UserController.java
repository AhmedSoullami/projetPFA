package com.siteEcommerce.siteEcommerceTapis.controllers;

import com.siteEcommerce.siteEcommerceTapis.configuration.JwtTokenUtil;
import com.siteEcommerce.siteEcommerceTapis.dto.JwtRequest;
import com.siteEcommerce.siteEcommerceTapis.dto.JwtResponse;
import com.siteEcommerce.siteEcommerceTapis.entities.Role;
import com.siteEcommerce.siteEcommerceTapis.entities.User;
import com.siteEcommerce.siteEcommerceTapis.repositories.RepoRole;
import com.siteEcommerce.siteEcommerceTapis.services.UserImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
public class UserController {
     @Autowired
     private AuthenticationManager authenticationManager;
     @Autowired
     private UserImpl userIpml;
     @Autowired
     private JwtTokenUtil jwtTokenUtil;
     @Autowired
     RepoRole repoRole;

     @Autowired
     PasswordEncoder passwordEncoder;
     @PostMapping({"/login"})
     public ResponseEntity<?> login(@RequestBody JwtRequest request) {
          try {
               Authentication authentication = this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
               User utilisateur = (User) authentication.getPrincipal();
               String accesToken = this.jwtTokenUtil.generateAccessToken(utilisateur);
               JwtResponse authenticationResponse = new JwtResponse(utilisateur.getEmail(), accesToken);
               return ResponseEntity.status(HttpStatus.OK).body(authenticationResponse);
          } catch (BadCredentialsException badCredentialsException) {
               return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
          }
     }
     @PostMapping("/register")
     public ResponseEntity<?> register(@RequestBody User user) {
          try {
               String encodedPassword = passwordEncoder.encode(user.getPassword());
               user.setPassword(encodedPassword);
               Role existingRole = repoRole.findByRoleName("user");
               if (existingRole == null) {
                    Role role = new Role("user", "user role");
                    existingRole = repoRole.save(role);
               }
               user.setRoles(Collections.singleton(existingRole));
               User registeredUser = userIpml.registreUser(user);
               return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
          } catch (Exception e) {
               return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());
          }
     }
     @GetMapping("/users")
     @PreAuthorize("hasRole('user')")
     public List<User>userList(){
     return userIpml.listUsers("user");
     }
     @DeleteMapping("/users/{userId}")
     @PreAuthorize("hasRole('admin')")
     public ResponseEntity<?> deleteUserById(@PathVariable Long userId) {
          try {
               // Votre logique de suppression d'utilisateur ici
               userIpml.deleteUserById(userId);

               return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
          } catch (Exception e) {
               return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user: " + e.getMessage());
          }
     }
     @GetMapping("/userCount")
     public ResponseEntity<Long> getUserCount() {
          try {
               Long userCount = userIpml.getUserCount();
               return ResponseEntity.ok(userCount);
          } catch (Exception e) {
               return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1L); // Gestion de l'erreur
          }
     }


}
