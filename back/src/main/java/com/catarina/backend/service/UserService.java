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
        validateUserRoleRules(user);
        return userRepo.save(user);
    }


    //update an existing user by its id
    public User updateUser(Long id, User updatedUser) {
        User existingUser = userRepo.findById(id).orElse(null);

        if (existingUser != null) {

            validateUserRoleRules(updatedUser);

            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setRole(updatedUser.getRole());
            existingUser.setCompany(updatedUser.getCompany());

            return userRepo.save(existingUser);
        } else {
            return userRepo.save(existingUser);

    }
}
       
         //new method with validation logic to avoid having that logic duplictae din updated and save  
private void validateUserRoleRules(User user){
    if(user.getRole()==Role.COMPANY_ADMIN && user.getCompany() == null){
        throw new IllegalArgumentException("COMPANY_ADMIN should be associated to a company");
        }
    }
}


    
