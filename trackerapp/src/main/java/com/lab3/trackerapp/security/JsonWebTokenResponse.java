package com.lab3.trackerapp.security;

import java.io.Serializable;

public class JsonWebTokenResponse implements Serializable {
    private static final long serialVersionUID = -2593226848485154524L;

    private final String token;

    public JsonWebTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}