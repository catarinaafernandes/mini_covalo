package com.catarina.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.catarina.backend.repo.UserRepo;
import com.catarina.backend.model.Role;
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

    //returns all users from the DB
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getUserById(Long id) {
        return userRepo.findById(id).orElse(null);
    }

    //create a new user in the DB
    public User saveUser(User user) {
        if (user.getRole() == Role.COMPANY_ADMIN && user.getCompany() == null) {
            throw new IllegalArgumentException("Company Admin must be associated with a company");
        }
        return userRepo.save(user);
    }


    //update an existing user by its id
    public User updateUser(Long id, User updatedUser) {
        User existingUser = userRepo.findById(id).orElse(null);

        if (existingUser != null) {

            if(updatedUser.getRole() == Role.COMPANY_ADMIN && updatedUser.getCompany() == null) {
                throw new IllegalArgumentException("Company Admin must be associated with a company");
            }

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