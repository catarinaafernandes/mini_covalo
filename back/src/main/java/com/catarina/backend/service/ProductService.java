package com.catarina.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.catarina.backend.repo.ProductRepo;
import com.catarina.backend.model.Product;




@Service
public class ProductService {
    //repo used to acess product data from DB
    private final ProductRepo productRepo;

    //constructor injection
    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    //returns all products from the DB
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    
    }

    //saves a product to the DB
    public Product saveProduct(Product product) {
        return productRepo.save(product);
    }
}


//TODO: add error handling for product operations