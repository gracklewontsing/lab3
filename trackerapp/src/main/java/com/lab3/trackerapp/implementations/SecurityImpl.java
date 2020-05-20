package com.lab3.trackerapp.implementations;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class SecurityImpl {
    public String hash(String clearText) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashedText = encoder.encode(clearText);
        return hashedText;
    }
}