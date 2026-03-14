package com.catarina.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class ProductController {

    @GetMapping("/products")
    public String test() {
        return "endpoint of products is working";
    }
    
}
