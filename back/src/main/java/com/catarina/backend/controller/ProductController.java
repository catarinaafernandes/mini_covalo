package com.catarina.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.catarina.backend.service.ProductService;
import com.catarina.backend.model.Product;


import java.util.List;


@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }    

    //public String test() {
        //return "endpoint of products is working";


    //creation of new product that persists in the DB, using the saveProduct method from the service layer
    @PostMapping("/products")
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    
    
}
