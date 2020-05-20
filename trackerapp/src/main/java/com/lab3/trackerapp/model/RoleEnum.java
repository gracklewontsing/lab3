package com.lab3.trackerapp.model;


public enum RoleEnum {
    ADMIN(1),
    USER(2);

    private final long roleId;

    RoleEnum(long roleId) {
        this.roleId = roleId;
    }

    public long getRoleId() {
        return this.roleId;
    }
}