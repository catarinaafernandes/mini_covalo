package com.catarina.backend.controller;

import com.catarina.backend.service.UserService;
import com.catarina.backend.model.User;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;


import java.util.List;



@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //returns all users from the DB
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();

    }

    //returns a user by its id
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);     

        }
         return ResponseEntity.notFound().build();
    }

    //creates a new usr in the DB
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    //update an existing user by its id
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatUser){
        User updated = userService.updateUser((id), updatUser);
        if(updated == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updated);
    
        }   

}