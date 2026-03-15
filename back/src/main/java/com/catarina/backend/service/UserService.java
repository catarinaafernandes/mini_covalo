package com.catarina.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.catarina.backend.repo.UserRepo;
import com.catarina.backend.model.User;

//user business logic here
@Service
public class UserService {

    //repo used to access user data from DB
    private final UserRepo userRepo;

    //constructor injection
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    //getters and setters for user data
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getUserById(Long id) {
        return userRepo.findById(id).orElse(null);
    }


    public User saveUser(User user) {
        return userRepo.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        User existingUser = userRepo.findById(id).orElse(null);

        if (existingUser != null) {
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setRole(updatedUser.getRole());
            existingUser.setCompany(updatedUser.getCompany());

            return userRepo.save(existingUser);
        } else {
            return null;
        }
    }

    //
}