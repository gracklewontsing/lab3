package com.lab3.trackerapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lab3.trackerapp.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>  {

    User findByUsername(String username);
}