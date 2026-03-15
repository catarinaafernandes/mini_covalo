package com.catarina.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.catarina.backend.model.User;


public interface UserRepo extends JpaRepository<User, Long> 
{
    
}