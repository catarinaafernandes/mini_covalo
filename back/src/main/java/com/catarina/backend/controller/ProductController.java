package com.catarina.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.catarina.backend.service.ProductService;
import com.catarina.backend.model.Product;

import org.springframework.web.bind.annotation.PathVariable;


import java.util.List;


@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    //returns all products from the DB
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }    

    //returns a product by its id
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    //public String test() {
        //return "endpoint of products is working";


    //creation of new product that persists in the DB, using the saveProduct method from the service layer
    @PostMapping
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }


    //update an existing product by its id, using the updateProduct method from the service layer
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        return productService.updateProduct(id, updatedProduct);
    //allows suplier company admins to update product info
    //auth and auth not implemented yet
    }


}
