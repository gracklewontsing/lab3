package com.lab3.trackerapp.security;

import java.io.Serializable;

public class JsonWebTokenRequest implements Serializable {
    private static final long serialVersionUID = 9097948831520572690L;

    private String username;
    private String password;

    public JsonWebTokenRequest() {}

    public JsonWebTokenRequest(final String username, final String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}