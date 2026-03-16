package com.catarina.backend.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.catarina.backend.repo.ProductRepo;
import com.catarina.backend.model.Product;




//service responsible for product business logic
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

    //returns a product by its id
    public Optional<Product> getProductById(Long id) {
        return productRepo.findById(id);
    }  


    //search for product
    public List<Product> searchProductsByName(String search) {
        return productRepo.findByNameContainingIgnoreCase(search);
    }


    //saves a product to the DB
    public Product saveProduct(Product product) {
        if (product.getCompany() == null) {
            throw new IllegalArgumentException("Product must be associated with a company");
        }
        return productRepo.save(product);
    }



    //updates a product in the DB
    public  Optional<Product> updateProduct(Long id, Product updatedProduct) {
        return productRepo.findById(id).map(existingProduct -> {

        
        if (updatedProduct.getCompany() == null) {
            throw new IllegalArgumentException("Product must be associated with a company");
        }

            existingProduct.setName(updatedProduct.getName());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setImageUrl(updatedProduct.getImageUrl());
            existingProduct.setCompany(updatedProduct.getCompany());

            return productRepo.save(existingProduct);
        }   ); 
                
        }   
     


}



