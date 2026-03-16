package com.catarina.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.catarina.backend.service.ProductService;
import com.catarina.backend.model.Product;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173") //allowing cross-origin requests from the frontend
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
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id).orElse(null);

        if (product == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(product);
    }

    //search for products by name, using the searchProductsByName method from the service layer
    @GetMapping("/search")
    public List<Product> getAllProducts(@RequestParam (required = false) String search) {
        if (search != null && !search.isBlank()) {
            return productService.searchProductsByName(search);
        } else {
            return productService.getAllProducts();
        }
    }
    //public String test() {
        //return "endpoint of products is working";


    //creation of new product that persists in the DB, using the saveProduct method from the service layer
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productService.saveProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }
    

    //update an existing product by its id
    // TO DO: restrict updates ti company admins of the supplier company that owns the product
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        Product updated = productService.updateProduct(id, updatedProduct).orElse(null);

        if (updated == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updated);
    }
    //allows suplier company admins to update product info
    //auth and auth not implemented yet
         


}
